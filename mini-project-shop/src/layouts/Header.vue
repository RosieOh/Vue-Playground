<template>
    <nav class="navbar navbar-expand-1g navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Soldout</a>
            <button class="navbar-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggle-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-1g-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">홈</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/">제품 리스트</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/detail">제품 상세페이지</router-link>
                    </li>
                    <li v-if="user.email!=undefined" class="nav-item">
                        <router-link class="nav-link active" to="/sales">제품 등록페이지</router-link>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'header'
    }
</script>