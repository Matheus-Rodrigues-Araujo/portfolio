const Navbar = () => {
    return (
        <nav class="navbar navbar-dark fixed-top" aria-label="First navbar example" style="background-color: black; opacity: .9;">
            <div class="container-fluid mx-5">
                <a class="navbar-brand" href="/index.html">
                <img src="/assets/logo_official.png" alt="Logo" srcset="" id="logo-img">
                </a>
                <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                
                <div class="navbar-collapse collapse " id="navbarsExample01">
                <ul class="navbar-nav me-auto mb-2">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/index.html">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="./pages/aboutme.html">About me</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="./pages/graduation.html">Graduation</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="./pages/career.html">Career</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="./pages/projects.html">Projects</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="./pages/contact.html">Contact</a>
                    </li>
                </ul>
                
                </div>
            </div>
            </nav>
    )
}