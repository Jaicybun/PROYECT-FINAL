import React from 'react';
import { NavLink } from "react-router-dom";

export function Header() {
  return (
      <div>
            <ul className="header-nav">
                    <li><NavLink to="/">Overview</NavLink></li>
                    <li><NavLink to="/contacts">Contacts</NavLink></li>
                    <li><NavLink to="/favorites">Favorites</NavLink></li>
                    <li><NavLink to="/new">New</NavLink></li>
            </ul>
      </div>
    )
  }