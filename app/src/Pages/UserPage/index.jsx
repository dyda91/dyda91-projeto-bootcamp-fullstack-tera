import React, { useEffect, useState, useContext} from 'react'
import { AuthContext } from '../../context/auth';

import { getUsers } from '../../services/api';
import './style.css';

export default function UserPage() {
  const { logout } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await getUsers();
      setUsers(response.data);
      setLoading(false);
    }
    )();
  }, []);

  const handleLogout = () => {
    logout();
  }



  if(loading) {
    return <div className="loading">Carregando dados...</div>;
  }
  return (
    
        <div>
          <div className="main-content">
      
        <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
          <div className="container-fluid">
          
            <a className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" href="https://www.creative-tim.com/product/argon-dashboard" target="_blank">Página do usuário</a>
          
            <form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
              <div className="form-group mb-0">
                <div className="input-group input-group-alternative">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-search"></i></span>
                  </div>
                  <input className="form-control" placeholder="Search" type="text" />
                </div>
              </div>
            </form>
            <ul className="navbar-nav align-items-center d-none d-md-flex">
              <li className="nav-item dropdown">
                <a className="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <div className="media align-items-center">
                    <span className="avatar avatar-sm rounded-circle">
                      <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg" />
                    </span>
                    <div className="media-body ml-2 d-none d-lg-block">
                      <span className="mb-0 text-sm  font-weight-bold">Edjalma Almeida</span>
                    </div>
                  </div>
                </a>
                <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                  <div className=" dropdown-header noti-title">
                    <h6 className="text-overflow m-0">Welcome!</h6>
                  </div>
                  <a href="../examples/profile.html" className="dropdown-item">
                    <i className="ni ni-single-02"></i>
                    <span>My profile</span>
                  </a>
                  <a href="../examples/profile.html" className="dropdown-item">
                    <i className="ni ni-settings-gear-65"></i>
                    <span>Settings</span>
                  </a>
                  <a href="../examples/profile.html" className="dropdown-item">
                    <i className="ni ni-calendar-grid-58"></i>
                    <span>Activity</span>
                  </a>
                  <a href="../examples/profile.html" className="dropdown-item">
                    <i className="ni ni-support-16"></i>
                    <span>Support</span>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a href="#!" className="dropdown-item">
                    <i className="ni ni-user-run"></i>
                    <span>Sair</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      
        <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center editarea" >
      
          <span className="mask bg-gradient-default opacity-8"></span>
        
          <div className="container-fluid d-flex align-items-center">
            <div className="row">
              <div className="col-lg-7 col-md-10">
                <h1 className="display-2 text-white">Olá Edjalma</h1>
                <p className="text-white mt-0 mb-5">Essa é sua página de perfil, aqui voce poderá ver seu progresso, editar suas informações de contato, e gerenciar seus cursos.</p>
                <a href="#!" className="btn btn-info">Editar perfil</a>
              </div>
            </div>
          </div>
        </div>
      
        <div className="container-fluid mt--7">
          <div className="row">
            <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
              <div className="card card-profile shadow">
                <div className="row justify-content-center">
                  <div className="col-lg-3 order-lg-2">
                    <div className="card-profile-image">
                      <a href="#">
                        <img src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg" className="rounded-circle" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                  <div className="d-flex justify-content-between">
                    <a href="#" className="btn btn-sm btn-info mr-4">Conectar</a>
                    <button className="btn btn-sm btn-default float-right" onClick={handleLogout}>Logout</button>
                  </div>
                </div>
                <div className="card-body pt-0 pt-md-4">
                  <div className="row">
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                        <div>
                          <span className="heading">22</span>
                          <span className="description">Cursos</span>
                        </div>
                        <div>
                          <span className="heading">10</span>
                          <span className="description">Concluidos</span>
                        </div>
                        <div>
                          <span className="heading">30</span>
                          <span className="description">Nivel</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3>
                      Edjalma Almeida<span className="font-weight-light">, 31</span>
                    </h3>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2"></i>Artur Nogueira, São Paulo
                    </div>
                    <div className="h5 mt-4">
                      <i className="ni business_briefcase-24 mr-2"></i>Full Stack Develloper
                    </div>
                    <div>
                      <i className="ni education_hat mr-2"></i>Tera
                    </div>
                    <hr className="my-4" />
                    
                    <a href="#">Mostrar mais</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 order-xl-1">
              <div className="card bg-secondary shadow">
                <div className="card-header bg-white border-0">
                  <div className="row align-items-center">
                    <div className="col-8">
                      <h3 className="mb-0">Minha Conta</h3>
                    </div>
                    <div className="col-4 text-right">
                      <a href="#!" className="btn btn-sm btn-primary">Configurações</a>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <form className='form'>
                    <h6 className="heading-small text-muted mb-4">Informações do usuário</h6>
                    <div className="pl-lg-4">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group focused">
                            <label className="form-control-label" htmlFor="input-username">Username</label>
                            <input type="text" id="input-username" className="form-control form-control-alternative" placeholder="Username" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="form-control-label" htmlFor="input-email">Email</label>
                            <input type="email" id="input-email" className="form-control form-control-alternative" placeholder="edjalmaalmeida@outlook.com" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group focused">
                            <label className="form-control-label" htmlFor="input-first-name">Nome</label>
                            <input type="text" id="input-first-name" className="form-control form-control-alternative" placeholder="Nome" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group focused">
                            <label className="form-control-label" htmlFor="input-last-name">Sobrenome</label>
                            <input type="text" id="input-last-name" className="form-control form-control-alternative" placeholder="Sobrenome" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="my-4" />

                    <h6 className="heading-small text-muted mb-4">Informações de contato</h6>
                    <div className="pl-lg-4">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group focused">
                            <label className="form-control-label" htmlFor="input-address">Endereço</label>
                            <input id="input-address" className="form-control form-control-alternative" placeholder="Endereço de residência" type="text" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="form-group focused">
                            <label className="form-control-label" htmlFor="input-city">Cidade</label>
                            <input type="text" id="input-city" className="form-control form-control-alternative" placeholder="Cidade" />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group focused">
                            <label className="form-control-label" htmlFor="input-country">País</label>
                            <input type="text" id="input-country" className="form-control form-control-alternative" placeholder="País"  />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label className="form-control-label" htmlFor="input-country">CEP</label>
                            <input type="number" id="input-postal-code" className="form-control form-control-alternative" placeholder="CEP" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="my-4" />
                    <h6 className="heading-small text-muted mb-4">Sobre</h6>
                    <div className="pl-lg-4">
                      <div className="form-group focused">
                        <label>Sobre</label>
                        
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="row align-items-center justify-content-xl-between">
          <div className="col-xl-6 m-auto text-center">
            <div className="copyright">
              <p>OnClick, pagina do usuario</p>
            </div>
          </div>
        </div>
      </footer>

      
  
    </div>   
    
  )
}
