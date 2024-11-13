import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { signIn } from '../firebase';
import {
    selectUserName,
    selectUserPhoto,
    setUserLoginDetails
} from "../feature/user/userSlice";
function Header(props) {
    const dispatch = useDispatch();
    const history = useNavigate();
    const username = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    const handleAuth = () => {
        signIn()

            .then((result) => {
                setUser(result.user);
            }).catch((error) => {
                alert(error.message);
            });

    };

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        );
    };

    return (
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="Display" />
            </Logo>

            {
                !username ?
                    <Login onClick={handleAuth}>Login</Login>
                    :
                    <>

                        <NavMenu>
                            <a href="/home">
                                <img src="/images/home-icon.svg" alt="" />
                                <span>HOME</span>
                            </a>
                            <a href="/search">
                                <img src="/images/search-icon.svg" alt="" />
                                <span>SEARCH</span>
                            </a>
                            <a href="/watchlist">
                                <img src="/images/watchlist-icon.svg" alt="" />
                                <span>WATCHLIST</span>
                            </a>
                            <a href="/movies">
                                <img src="/images/movie-icon.svg" alt="" />
                                <span>MOVIES</span>
                            </a>
                            <a href="/series">
                                <img src="/images/series-icon.svg" alt="" />
                                <span>SERIES</span>
                            </a>
                        </NavMenu>
                        <UserImg src={userPhoto} alt={username}/>
                    </>
            }

        </Nav>
    );
}

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;
`;


const Logo = styled.a`
    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    display: inline-block;
    img {
        display: bllock;
        width: 100%;
    }
`;

const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;

        img {
            height: 20px;
            min-width: 20px;
            width: 20px;
            z-index: auto;
        }
        span {
            color: rgb(249, 249, 249);
            font-size: 13px;
            letter-spacing: 1.42px;
            line-height: 1.08;
            padding: 2px 0px;
            white-space: nowrap;
            position: relative;

        &:before {
            /* content: "hello";
            display: block; */
            background-color: rgb(249,249, 249);
            border-radius: 0px 0px 4px 4px;
            bottom: -6px;
            content: '';
            height: 2px;
            left: 0px;
            opacity: 0;
            position: absolute;
            right: 0px;
            transform-origin: left center;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            visibility: hidden;
            width: auto;
        }
    }
    &:hover {
        span:before {
            transform: scaleX(1);
            visibility: visible;
            opacity:  1 !important;
        }
    }
}

    /* @media (max-width: 768px) {
        display: none;
    } */
`;

const Login = styled.a`
    background-color: rgba(0, 0, 0, 0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition: all .2s ease 0s;
    cursor: pointer;

    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
        /* border: 1px solid black; */
    }
`;

const UserImg = styled.img`
    height: 100%;

`;
export default Header;