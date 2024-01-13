var udata=localStorage.getItem('uinfo');
var user=JSON.parse(udata);

var navLogout=`<nav class="navigation">
        <!-- *logo************ -->
        <a href="#" class="logo">
            <img src="image/th..jpg"/>
        </a>
        <!-- *search********** -->
        <form class="search-box">
            <input type="text" placeholder="Search Product Here " required>
            <button>
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
        </form>
        <!-- *btns********** -->
        <div class="nav-btns">
            <!-- user -->
              <a href="login.html" class="nav-user">
                <i class="fa-regular fa-user"></i>
              </a>

            <!-- cart -->
            <a href="#" class="nav-cart">
                <i class="fa-solid fa-cart-shopping"></i>
            </a>
        </div>
    </nav>`;

    var navLogin=`<nav class="navigation">
    <!-- *logo************ -->
    <a href="#" class="logo">
        <img src="image/th..jpg"/>
    </a>
    <!-- *search********** -->
    <form class="search-box">
        <input type="text" placeholder="Search Product Here " required>
        <button>
            <i class="fa-solid fa-magnifying-glass"></i>
        </button>
    </form>
    <!-- *btns********** -->
    <div class="nav-btns">
        <!-- user -->
          <a href="javascript:void(0);" class="nav-user">
            <i class="fa-regular fa-user"></i>
          </a>
        
        <!-- cart -->
        <a href="#" class="nav-cart">
            <i class="fa-solid fa-cart-shopping"></i>
        </a>
        <a href="javascript:void(0);" onclick="logOut()">Logout</a>
    </div>
    </nav>`;
    


if(udata!=null){
    document.writeln(navLogin);
}else{
    document.writeln(navLogout);
}