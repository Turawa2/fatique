import React from 'react'
import AddProductForm from '../component/AddProductForm'

function AddProduct() {
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
                        
                    </div>
                    <div class="col-sm-8">
                        <div class="page-header float-right">
                            <div class="page-title">
                                <ol class="breadcrumb text-right">
                                    <li><a href="#">Dashboard</a></li>
                                    <li><a href="#">ADD PRODUCT</a></li>
                                    
                                </ol>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

      <AddProductForm/>

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

export default AddProduct
