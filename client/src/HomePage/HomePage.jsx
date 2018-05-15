import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
// import "./Home.css";
// import "./HomePage.css";

class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user, users } = this.props;
        return (<div className="App"><div className="header">
        <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">

            <ul className="pure-menu-list">
                <li className="pure-menu-item"><Link to="/RecipePage" className="pure-menu-link">Recipes</Link></li>
                <li className="pure-menu-item"><Link to="/Articles" className="pure-menu-link">Articles</Link></li>
                <li className="pure-menu-item"><Link to="/Profile" className="pure-menu-link">My Profile</Link></li>
                <li className="pure-menu-item"><Link to="#" className="pure-menu-link">Sign Up</Link></li>
            </ul>
        </div>
    </div>

    <div className="splash-containerHome">
        <div className="splash">
            <h1 className="splash-head">Welcome to PediaPedia</h1>
            <p className="splash-subhead">
                A place for parents to find useful information to help navigate through parenthood.
            </p>
            <p>
                <Link to="/Articles" className="pure-button pure-button-primary">Articles!</Link>
                </p>
                <p>
                <Link to="/RecipePage" className="pure-button pure-button-primary">Recipes!</Link>
            </p>
        </div>
    </div>

<div className="footer">
  PediaPedia ©
</div>
        <div className="row">
            
            <div className="col-md-12">
                <h1>Hi {user.firstName}!</h1>
                <p>Would you like to search for nutrients !!</p>
                
                <h3>
                    <a href="./src/Search/searchFood.html">Search</a>
                </h3>                             
            </div>
            <div align="right">
                    <p>
                        <Link to="/login">Logout</Link>
                    </p>
                </div>
        </div>
        </div>);
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };