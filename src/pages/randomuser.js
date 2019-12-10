import React from 'react'
import "antd/dist/antd.css"
import {
    Card,
    Divider,
    Avatar,
    Typography,
    Button
} from 'antd'
import {connect} from 'react-redux'
import axios from 'axios'
import moment from 'moment';
import user from '../models/user'
import select from '../models/select';



const mapPropsToState = state => {
    return {
        user: state.user,
        select: state.select
    }
  }
class Randomusr extends React.Component {
    componentDidMount(){
      this.getUserInfor()
    }
    getUserInfor(){
      axios.get('https://randomuser.me/api')
            .then(res => {
              const {dispatch}=this.props
              dispatch(
                {
                  type: 'SET_USER',
                  user: res.data.results[0]
                }
              )
            })
            .catch(e => {
              console.log(e.toString())
            })
    }
    handleChange = name => event => {
      const {dispatch}=this.props
      dispatch(
        {
          type: 'SELECT',
          select: name
        }
      )
    }
      render(){
        const { user, select } = this.props
        return (
          <div style={{ padding: "25px 25px"  }}>
          <Card  bordered={false} style={{ width: 600 }}>
                <Divider>
                <Avatar  size={100} src={user.picture ? user.picture.large : ''}  />
                </Divider>
                  {
                    select === 'home' ?
                    <div>
                      <Typography color="secondary">My name is </Typography>
                      <h1>{user.name.title}. {user.name.first} {user.name.last} </h1>
                    </div>
                    : ''
                  }
                  {
                    select === 'email' ?
                    <div>
                      <Typography color="secondary">My email is </Typography>
                      <h1>{user.email} </h1>
                    </div>
                    : ''
                  }
                  {
                    select === 'birthday' ?
                    <div>
                      <Typography color="secondary">My DOB is</Typography>
                      <h1>{user.dob ? moment(user.dob.date).format('DD/MM/YYYY') : ''}</h1>
                    </div>
                    : ''
                  }
                  {
                    select === 'address' ?
                    <div>
                      <Typography color="secondary">My address is </Typography>
                      <h1>{user.location.street.number} {user.location.street.name} </h1>
                    </div>
                    : ''
                  }
                  {
                    select === 'phone' ?
                    <div>
                      <Typography color="secondary">My phone-number is </Typography>
                      <h1>{user.phone ? user.phone : ''} </h1>
                    </div>
                    : ''
                  }
                  {
                    select === 'password' ?
                    <div>
                      <Typography color="secondary">My pw is </Typography>
                      <h1>{user.nat ? user.nat : ''} </h1>
                    </div>
                    : ''
                  }
                  <Button color="primary" size='large' icon="user" onMouseOver={this.handleChange('home')} />
                  <Button color="primary" size='large' icon="mail" onMouseOver={this.handleChange('email')} />
                  <Button color="primary" size='large' icon="phone" onMouseOver={this.handleChange('phone')} />
                  <Button color="primary" size='large' icon="calendar" onMouseOver={this.handleChange('birthday')} />
                  <Button color="primary" size='large' icon="home" onMouseOver={this.handleChange('address')} />
                  <Button color="primary" size='large' icon="phone" onMouseOver={this.handleChange('phone')} />
                  <Button color="primary" size='large' icon="lock" onMouseOver={this.handleChange('password')} />
          </Card>
          </div>
        )
  
      }
  }

  export default connect(mapPropsToState)(Randomusr);


