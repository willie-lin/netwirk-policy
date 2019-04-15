import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
    handleSubmit;
    handleChange;

    render() {
        return <div className="wrapper">
            <div className="form-wrapper">
                <h1>Create Network-Policy</h1>
                <form onSubmit={this.handleSubmit} noValidate>
                    <div className="name">
                        <label htmlFor="name">name</label>
                        <input type="text"
                               className=""
                               placeholder="name"
                               name="name"
                               noValidate
                               onChange={this.handleChange}
                        />
                    </div>

                    <div className="namespace">
                        <label htmlFor="namespace">namespace</label>
                        <input type="text"
                               className=""
                               placeholder="namespace"
                               name="namespace"
                               noValidate
                               onChange={this.handleChange}
                        />
                    </div>

                    <div className="cidr">
                        <label htmlFor="cidr">cidr</label>
                        <input type="text"
                               className=""
                               placeholder="cidr"
                               name="cidr"
                               noValidate
                               onChange={this.handleChange}
                        />
                    </div>
                    <div className="excepts">
                        <label htmlFor="excepts">excepts</label>
                        <input type="text"
                               className=""
                               placeholder="excepts"
                               name="excepts"
                               noValidate
                               onChange={this.handleChange}
                        />
                    </div>
                    <div className="port">
                        <label htmlFor="port">port</label>
                        <input type="port"
                               className=""
                               placeholder="port"
                               name="port"
                               noValidate
                               onChange={this.handleChange}
                        />
                    </div>
                    <div className="protocol">
                        <label htmlFor="protocol">protocol</label>
                        <input type="text"
                               className=""
                               placeholder="protocol"
                               name="protocol"
                               noValidate
                               onChange={this.handleChange}
                        />
                    </div>
                    <div className="project">
                        <label htmlFor="project">project</label>
                        <input type="text"
                               className=""
                               placeholder="project"
                               name="project"
                               noValidate
                               onChange={this.handleChange}
                        />
                    </div>
                    <div className="role">
                        <label htmlFor="role">role</label>
                        <input type="text"
                               className=""
                               placeholder="role"
                               name="role"
                               noValidate
                               onChange={this.handleChange}
                        />
                    </div>
                    <div className="spec_pod">
                        <label htmlFor="spec_pod">spec_pod</label>
                        <input type="text"
                               className=""
                               placeholder="spec_pod"
                               name="spec_pod"
                               noValidate
                               onChange={this.handleChange}
                        />
                    </div>
                    <div className="policy_type">
                        <label htmlFor="policy_type">policy_type</label>
                        <input type="text"
                               className=""
                               placeholder="policy_type"
                               name="policy_type"
                               noValidate
                               onChange={this.handleChange}
                        />
                    </div>
                    <div className="create-network-policy">
                        <button type="submit">Create NetworkPolicy</button>
                    </div>
                </form>
            </div>

        </div>
    }
}

export default App;
