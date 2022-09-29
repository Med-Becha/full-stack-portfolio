import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import axios from "axios"
import Loader from "./components/Loader";
import Home from "./pages/home";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, SetprotfolioData, ShowLoading, ReloadData } from "./redux/rootSlice"
import Admin from "./pages/admin";
import AdminLogin from "./pages/admin/AdminLogin";
import Particle from "./components/Particle";


function App() {
  const { loading, protfolioData , reloadData} = useSelector((state) => state.root)
  const dispatch = useDispatch();
  const getprotfolioData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.get('/api/portfolio/get-portfolio-data')
      dispatch(SetprotfolioData(response.data))
      dispatch(ReloadData(false))
      dispatch(HideLoading())
     
      
    } catch (error) {
      dispatch(HideLoading())
    }
  }

  useEffect(() => {
    if (!protfolioData) { getprotfolioData() }
  }, );
useEffect(()=>{
  if(reloadData){
    getprotfolioData()
  }
},[reloadData])

  return (
    <BrowserRouter>
      {loading ? <Loader /> : null}
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="admin" element={<Admin/>}/>
        <Route path="/admin-login" element={<AdminLogin/>} />
       
      </Routes>
      <Particle/>
    </BrowserRouter>
  );
}

export default App;

