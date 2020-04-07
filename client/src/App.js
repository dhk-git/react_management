import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

// const customers = [
// {
//   "id": 1,
//   "name":"홍길동",
//   "image":"http://placeimg.com/50/50/any",
//   "birthday":"2010-09-04",
//   "gender":"남",
//   "job":"Developer"
// },
// {
//   "id": 2,
//   "name":"홍길순",
//   "image":"http://placeimg.com/50/50/any",
//   "birthday":"2010-09-04",
//   "gender":"남",
//   "job":"Developer"
// },
// {
//   "id": 3,
//   "name":"홍길남",
//   "image":"http://placeimg.com/50/50/any",
//   "birthday":"2010-09-04",
//   "gender":"남",
//   "job":"Developer"
// }
// ]

const styles = theme => (
  {
    root: {
      width:'100%',
      marginTop: theme.spacing(3),
      overflowX:"auto"
    },
    table: {
      minWidth:1080
    },
    progress:{
      margin:theme.spacing(2)
    }
  }
)

class App extends Component{

  state={
    customers: "",
    complated: 0
  }

  componentDidMount(){
    this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then(res => this.setState({customers:res}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  progress = () => {
    const { complated } = this.state;
    this.setState({ complated: complated >= 100 ? 0 : complated + 1 });

  }

  render(){
    const { classes } = this.props;
    return(
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
              <TableRow>
                <TableCell>
                  번호
                </TableCell>
                <TableCell>
                  이미지
                </TableCell>
                <TableCell>
                  이름
                </TableCell>
                <TableCell>
                  생년월일
                </TableCell>
                <TableCell>
                  성별
                </TableCell>
                <TableCell>
                  직업
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                {this.state.customers ? this.state.customers.map(customer => 
                    (<Customer key={customer.id} id={customer.id} name={ customer.name} image={ customer.image } birthday={customer.birthday} gender={customer.gender} job={customer.job}/>))
                : 
                <TableRow>
                  <TableCell>
                    <CircularProgress className={classes.progress} variant="determinate" value={this.state.complated}/>
                  </TableCell>
                </TableRow>
                
                }
            </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
