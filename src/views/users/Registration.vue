<template>
    <div>
        <main class="overflow-hidden ">
        <!--Start Breadcrumb Style2-->
        <section class="breadcrumb-area" style="background-image: url(/src/assets/images/inner-pages/breadcum-bg.png);">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="breadcrumb-content text-center wow fadeInUp animated">
                            <h2>Register</h2>
                            <div class="breadcrumb-menu">
                                <ul>
                                    <li><a href="index.html"><i class="flaticon-home pe-2"></i>Home</a></li>
                                    <li> <i class="flaticon-next"></i> </li>
                                    <li class="active">Register</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--End Breadcrumb Style2-->
        <!--Start Login Page-->
        <section class="login-page pt-120 pb-120">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-8 col-md-9 wow fadeInUp animated">
                        <div class="login-register-form" style="background-image: url('/src/assets/images/inner-pages/login-bg.png');">
                            <div class="top-title text-center ">
                                <h2>Register</h2>
                                <p>Already have an account? <a href="login.html">Log in</a></p>
                            </div>
                            <form class="common-form">
                                <div class="form-group"> 
                                    <input v-model="name" type="text" class="form-control" placeholder="Имя">
                                </div>
                                <div class="form-group"> 
                                    <input v-model="email" type="email" class="form-control" placeholder="Email"> 
                                </div>

                                <div class="form-group eye">
                                    <div class="icon icon-1"> <i class="flaticon-hidden"></i></div> 
                                        <input v-model="password" type="password" id="password-field-1" class="form-control" placeholder="Пароль">
                                    <div class="icon icon-2 "><i class="flaticon-visibility"></i> </div>
                                </div>

                                <div class="form-group eye">
                                    <div class="icon icon-1"> <i class="flaticon-hidden"></i> </div> 
                                        <input v-model="password_confirmation" type="password" id="password-field-2" class="form-control" placeholder="Подтвердите пароль">
                                    <div class="icon icon-2 "><i class="flaticon-visibility"></i> </div>
                                </div>

                                <div class="form-group custom-radio-block d-flex">
                                    <div class="custom-control custom-radio custom-control-inline custom-radio-button">
                                        <input v-model="gender" class="custom-control-input" type="radio" name="gender" id="male" value="1" checked>
                                        <label class="custom-control-label" for="male">М</label>
                                    </div>
                                    <div class="custom-control custom-radio custom-control-inline custom-radio-button">
                                        <input v-model="gender" class="custom-control-input" type="radio" name="gender" id="female" value="2">
                                        <label class="custom-control-label" for="female">Ж</label>
                                    </div>
                                </div>

                                <div class="checkk">
                                    <div class="form-check p-0 m-0">
                                        <input type="checkbox" id="remember">
                                        <label class="p-0" for="remember"> Accept the Terms and Privacy Policy </label>
                                    </div>
                                </div> 

                                <button @click.prevent="store" type="submit" class="btn--primary style2">Зарегистирироваться </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--End Login Page-->
    </main>
    </div>
</template>

<script>
export default{
    name:"Registration",
    mounted(){
        $(document).trigger('changed')
    }, 

        data(){
            return{
                name: null,
                email: null,
                password: null,
                gender: null,
                password_confirmation: null,
            }
        },

        methods: {
            store(){
                this.axios.post('http://localhost:8000/api/users', { 
                    'name': this.name, 
                    'email': this.email, 
                    'gender': this.gender,
                    'password': this.password, 
                    'password_confirmation': this.password_confirmation
                })
                .then( res => {
                    console.log(res); 
                })
            }
        }
}
</script>

<style>
  .custom-radio-button .custom-control-input {
    display: none;
  }

  .custom-radio-button .custom-control-label {
    padding-left: 4em;
    margin-left: 0.5em;
    position: relative;
    cursor: pointer;
  }

  .custom-radio-button .custom-control-label::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 1em;
    height: 1em;
    background-color: #1a1a1a;
    border-radius: 50%;
    margin-top: 0.2em;
    margin-left: 2em;
  }

  .custom-radio-button .custom-control-input:checked~.custom-control-label::before {
    background-color: rgb(246, 156, 99);
  }
  .custom-radio-block{
    margin-left: 15%;
    margin-top: 2em;
  }
</style>