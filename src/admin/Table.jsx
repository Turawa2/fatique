import React from 'react'
import { useNavigate } from 'react-router-dom'

function Table() {
    const navigate = useNavigate();
    const handleAddProduct = () => {
        navigate('/addProduct');
    }
  return (
   <>


    <aside id="left-panel" class="left-panel">
        <nav class="navbar navbar-expand-sm navbar-default">

            <div id="main-menu" class="main-menu collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li>
                        <a href="/table"><i class="menu-icon fa fa-laptop "  style={{color: "skyblue"}}></i>Dashboard </a>
                    </li>
                    
                    <li class="menu-item-has-children dropdown">
                        <a href="/history" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon fa fa-file"></i>History</a>
                      
                    </li>
                    <li class="menu-item-has-children dropdown">
                        <a href="/productList" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon fa fa-folder"></i>Product List</a>
                      
                    </li>
                    <li class="menu-item-has-children dropdown">
                        <a href="/admin" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon fa fa-cogs"></i>Admin</a>
                      
                    </li>
                   
                  
                </ul>
            </div>
        </nav>
    </aside>



    <div id="right-panel" class="right-panel">

     

        <div class="breadcrumbs">
            <div class="breadcrumbs-inner">
                <div class="row m-0">
                    <div class="col-sm-4">
                    <div class="page-header float-left">
                            <div class="page-title">
                              
                                <button className='btn btn-success mt-2' onClick={handleAddProduct}>ADD PRODUCT</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <div class="page-header float-right">
                            <div class="page-title">
                                <ol class="breadcrumb text-right">
                                    <li><a href="#">Dashboard</a></li>
                                    <li><a href="#">Table</a></li>
                                    
                                </ol>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="content">
            <div class="animated fadeIn">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-header">
                                <strong class="card-title">Pending Table</strong>
                              
                                <div class="form-group col-md-6 mb-3">
                        <input type="search" class="form-control mt-1 " id="search" placeholder='Search.......' />
                   </div>
                            </div>
                            <div class="table-stats order-table ov-h">
                                <table class="table ">
                                    <thead>
                                        <tr>
                                            <th class="serial">S/N</th>
                                            <th class="avatar">Evidence</th>
                                            <th>Full name</th>
                                            <th>Phone Number</th>
                                            <th>Address</th>
                                            <th>Message</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="serial">1.</td>
                                            <td class="avatar">
                                                <div class="round-img">
                                                    <a href="#"><img class="rounded-circle" src="/1.jpg" alt=""/></a>
                                                </div>
                                            </td>
                                            <td> #5469 </td>
                                            <td>  <span class="name">Louis Stanley</span> </td>
                                            <td> <span class="product">iMax</span> </td>
                                            <td><span class="count">231</span></td>
                                            <td>
                                                <span class="badge badge-complete">Complete</span>
                                            </td>
                                        </tr>
                                      
                                    </tbody>
                                </table>
                            </div> 
                        </div>
                    </div>
                   

        </div>
    </div>
</div>

<div class="clearfix"></div>

<footer class="site-footer">
    <div class="footer-inner bg-white">
        <div class="row">
            <div class="col-sm-6">
                Copyright &copy; 2023 Dev-lord
            </div>
            <div class="col-sm-6 text-right">
                Designed by <a href="https://dev-lord.netlify.app">Dev-lord</a>
            </div>
        </div>
    </div>
</footer>

</div>

   </>
  )
}

export default Table
