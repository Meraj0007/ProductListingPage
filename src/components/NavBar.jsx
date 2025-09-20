import React from "react";

export function NavBar(){
    return(
            <div>
                <div>E-Comm</div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/">BAG</Link>
                        </li>
                        <li>
                            <Link to="/">SNEAKERS</Link>
                        </li>
                        <li>
                            <Link to="/">BELT</Link>
                        </li>
                        <li>
                            <Link to="/">CONTACT</Link>
                        </li>
                    </ul>
                </nav>

                <div>
                    <button>
                        Items
                    </button>
                </div>
            </div>
     
    )
}

export default NavBar