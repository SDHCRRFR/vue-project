<template>
    <div class="admin_dashboard">
        <nav>
            <div class="nav-container">
                <div id="logo">
                        <img src="../../assets/logosaid.svg" alt="logo" />
                </div>
                <ul id="icons">
                    <li>
                        <router-link to="/user/shop/13"> </router-link>
                    </li>
                    <li>
                        <router-link to="/user/logout">
                     <i class="fa-solid fa-arrow-right-from-bracket"></i>
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="container">
            <h4>Administration <span><i class="fa-solid fa-gear"></i> </span></h4>
            <hr>
            <div class="container_block">
            <h5>restaurant</h5>
            <hr>
            <h5>user</h5>
            <hr>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AdminDashboard'
}
</script>

<style scoped>
.admin_dashboard {
    width: 100%;
    min-height: 100vh;
    align-items: center;
    display: flex;
    flex-direction: column;
}

.container {
    width: 80%;
    height: 87vh;
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
}

.container_block {
    width: 60%;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
}

ul,
li {
    list-style: none;
}

a,
a:visited {
    color: #333;
}

nav {
    padding: 0rem 2.4rem;
    background: #fff;
    position: fixed;
    width: 95%;
    z-index: 2;
    box-shadow: 0 2px 4px -3px rgba(51, 51, 51, 0.2);
}

h4 {
    text-decoration: underline black;
}

nav .nav-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 1450px;
}

nav .nav-container #logo {
    height: 32px;
    width: 66%;
}

nav .nav-container #logo img {
    height: 100%;
}

nav .nav-container #icons {
    display: flex;
    font-size: 24px;
    width: 34%;
    justify-content: flex-end;
}

nav .nav-container #icons li {
    margin-left: calc(35% + 8px);
}

nav .nav-container #icons li a {
    position: relative;
}

nav .nav-container #icons #nav-not {
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background: #ff2929;
    position: absolute;
    visibility: hidden;
    opacity: 1;
    transition: 0.6s;
    transform: translate(-4px, -1px);
}

nav .nav-container #icons i {
    transition: 0.25s;
    cursor: pointer;
}

nav .nav-container #icons i:hover {
    color: rgba(34, 34, 34, 0.65);
}

hr {
    border: 1px solid black;
    width: 100%;
}
</style>