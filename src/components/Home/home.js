import React, { Fragment } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import landingPageImg from "./landing.png";
import "./home.css";

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>

        <Grid spacing={2} container justify="space-around" >
          <Grid item sm={12} md={12} lg={12}>
          <div id="landingOverlay">
            <div id="landing">
              <Grid spacing={0} container justify="flex-start" direction="column">
                <Grid item md={3}>
                  <h1>Welcome!</h1>
                </Grid>
                <Grid item md={6}>
                <h4 >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, minus?</h4>
                </Grid>
              </Grid>
              </div>
            </div>
          </Grid>
          <Grid item md={4} sm={12} xs={12}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea deserunt optio maiores perspiciatis? Perferendis nam quos amet ratione voluptate ab, itaque dolor odio, eum nesciunt architecto atque incidunt voluptatibus dicta obcaecati repellat ducimus natus veniam quas laboriosam rerum vero in?</Grid>
          <Grid item md={4} sm={12} xs={12}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus facilis, corrupti, recusandae dolore ab, aspernatur id sed quia beatae deleniti tempora ratione? Ipsam suscipit, nostrum doloribus aperiam enim neque recusandae sequi sed. Architecto, error veniam voluptatem neque iusto maiores, magni tempore magnam facere fuga nulla ipsam sequi culpa natus quidem, quaerat quis aut adipisci at.</Grid>
        </Grid>
      </Fragment>
    )
  }
}

export default Home;

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// // import "./home.css";
// // import landingImg from "./undraw_Hello_qnas.svg";

// const styles = {
//   h1: {
//     color: "red"
//   }
// };

// const useStyles = makeStyles(styles);

// export default class Home extends React.Component {
//   constructor(props){
//     super(props);
//   }

//   render() {
//     const cssClasses = useStyles();
//     return(<h1 >home</h1>)
//     // return (<section id="home">
//     //   {/* <img src={landingImg} alt="landing page image"/> */}

//     //   <div className="flex_child">
//     //   <p>
//     //     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//     //       </p>
//     //   </div>
//     //   <div className="flex_child">
//     //   <p>
//     //     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//     //       </p>
//     //   </div>

//     // </section>)
//   }
// }