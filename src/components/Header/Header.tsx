import { useState } from "react"
import { IHeader } from "../../types/main"
import { IUser } from "../../types/user"
import { users } from "../../fixtures/users"
import { createStore, useStore } from 'usestore-react';
createStore('currentUser', users[0]);

const headers: IHeader[] = [{
    id: "home",
    label: "Home",
    link: "#"
}]

const HeaderItem = ({ header }: { header: IHeader }): JSX.Element => <li className="nav-item">
    <a className="nav-link active" aria-current="page" href={header.link}>{header.label}</a>
</li>

export default function Header(): JSX.Element {
    const [currentUser, setCurrentUser] = useStore<IUser>('currentUser')
    const [dropdownToggle, setDropdownToggle] = useState<boolean>(false)

    const handleDropdownUser = (user: IUser): void => {
        setCurrentUser(user)
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand">Food ordering</a>
                <div className="collapse navbar-collapse mx-auto" id="navbarNav">
                    <ul className="navbar-nav">
                        {headers.map((header: IHeader) => <HeaderItem header={header} />)}
                        <li className="nav-item dropdown" onClick={() => setDropdownToggle(!dropdownToggle)}>
                            <a className="nav-link dropdown-toggle" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {currentUser.name}
                            </a>
                            <ul className={`dropdown-menu ${dropdownToggle && `show`}`} aria-labelledby="navbarScrollingDropdown">
                                {users.map((user: IUser) => <li><a onClick={() => handleDropdownUser(user)} className="dropdown-item">{user.name}</a></li>)}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}