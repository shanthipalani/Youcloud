//import Layout  from './Components/layout/layout'
import React from 'react'

import './scss/index.scss';
import './scss/style.header-spaceship-variant-one.scss';
import './scss/style.header-spaceship-variant-two.scss';
import './scss/style.header-spaceship-variant-three.scss';
import './scss/style.header-classic-variant-one.scss';
import './scss/style.header-classic-variant-two.scss';
import './scss/style.header-classic-variant-three.scss';
import './scss/style.header-classic-variant-four.scss';
import './scss/style.header-classic-variant-five.scss';
import './scss/style.mobile-header-variant-one.scss';
import './scss/style.mobile-header-variant-two.scss';
import './App.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import Form from './Components/Signin_1/Form'
import Form2 from './Components/Signin_2/Form2'
import Form3 from './Components/Signin_3/Form3'
//import Signup from './Components/SignUp/signup'
import NearByStore from './Components/NearByStore/nearByStore'
import ProductPage from './Components/ProductPage/productPage'
import Layout from './Components/layout/layout'
import Password from './Components/Password_recovery/pwd'
import ProductDetailPage from './Components/ProductDetailPage/productDetailPage'
import FilterPage from './Components/Filter/filterPage'
import { Switch, Route} from 'react-router-dom'
import Nav from './Components/navigation/nav'



function App() {
  return (

      <div>
        {/* <Form/> */}
        {/* <Switch>
          <Route path='/' exact><Form></Form></Route>
          <Route path="/forgotpassword" exact component={Password} />
          <Route path="/SignUp" exact component={Signup}/>
          <Route path="/SignIn" exact component={Form}/> */}
          {/* <ProductDetailPage /> */}
          {/* <Form2/> */}
          {/* <Form3/> */}
          {/* <Signup/> */}
          <ProductPage />
          {/* <NearByStore /> */}
          {/* <FilterPage /> */}
          {/* <Layout/> */}
          {/* <Password /> */}
        {/* </Switch> */}
    </div>

  );
}

export default App;
