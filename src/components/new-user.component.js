import React from 'react';

class NewUser extends React.Component {

    constructor(props) {
        super(props);

        this.state = { user: { isFormValid: false } };
        this.save = this.save.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    save() {
        console.log(this.state);
        this.props.history.push('/users');
    }

    onChange(evt) {
        let name = evt.target.name;
        let value = evt.target.value;

        let user = this.state.user;
        user[name] = value;
        user.isFormValid = this.state.user.name && this.state.user.email ? true : false;;

        this.setState({ user: user });

        console.log(this.state);
    }

    render() {
        return (
            <div className="col-md-4">
                <form noValidate="false">
                    <h1>Add new user</h1>
                    <div className="form-group">
                        <input type="text" placeholder="Name" required className={this.state.user.name ? 'form-control success' : 'form-control error'} name="name" onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Email" required className={this.state.user.name ? 'form-control success' : 'form-control error'} name="email" onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <input value="Save" type="submit" onClick={this.save} className="btn btn-success" disabled={!this.state.user.isFormValid} />
                    </div>
                </form>
            </div>
        )
    }
}


export default NewUser;