import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiUser, FiBriefcase, FiMapPin, FiLinkedin, FiTwitter, FiGithub, FiInstagram, FiChevronRight, FiMail, FiArrowRight, FiArrowLeft } from 'react-icons/fi'
import api from '../../services/api'
import './styles.css'

interface User {
    id: number
    name: string
    avatar_url: string
    bio: string
    company: string
    html_url: string
    blog: string
    twitter_username: string
    location: string
    email: string
    public_repos: number
    followers: number
}

const Sidebar: React.FC = (props) => {

    const [user, setUser] = useState<User>()
    const [page, setPage] = useState<number>()

    useEffect(() => {
        api.get('/users/mrbrunelli').then(response => {
            setUser(response.data)
        })
    }, [])

    return (
        <div id="layout">
            <aside>
                <div>
                    <picture>
                        <img src={user?.avatar_url} alt="Foto de perfil" />
                    </picture>
                    <h3 style={{ color: '#C4E538' }}><FiUser /> {user?.name}</h3>
                    <h4><FiMapPin /> {user?.location}</h4>
                    <h4><FiBriefcase /> {user?.company}</h4>
                    <br />
                    <h3 style={{ color: '#C4E538' }}><FiChevronRight /> Minhas redes sociais</h3>
                    <span>
                        <a href={user?.html_url} target="_blank"><FiGithub /></a>
                        <a href={user?.blog} target="_blank"><FiLinkedin /></a>
                        <a href={"https://twitter.com/" + user?.twitter_username} target="_blank"><FiTwitter /></a>
                        <a href={"https://www.instagram.com/mrbrunelli/"} target="_blank"><FiInstagram /></a>
                    </span>
                    <br />
                    <h3 style={{ color: '#C4E538' }}><FiChevronRight /> Contato</h3>
                    <h4><FiMail /> matheus.brunelli@gmail.com</h4>
                </div>
            </aside>

            <div id="background-content">
                <div id="content">
                    {props.children}
                    <div id="content-links">
                        <Link to="/"><FiArrowLeft style={{ color: '#fff' }} /></Link>
                        <Link to="/repos"><FiBriefcase style={{ color: '#fff' }} /></Link>
                        <Link to="/education"><FiArrowRight style={{ color: '#fff' }} /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar