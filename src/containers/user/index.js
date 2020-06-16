import React, { Component } from 'react';
import MenuContainer from './menu';
import './index.css'
import Card from './Card';


export class ContainerUser extends Component {
  
  render() {
    return (
      <div className="container-fluid">
<header class="container portfolio">
	
	<div class="bio-info">
		<div class="row">
			<div class="col-md-6">
				<div class="row">
					<div class="col-md-12">
						<div class="bio-image">
							<img src="https://cdn3.vectorstock.com/i/1000x1000/16/22/chef-with-food-recipe-book-in-the-cartoon-shape-vector-24281622.jpg" width="60%"alt="image" />
						</div>			
					</div>
				</div>	
			</div>
			<div class="col-md-6">
				<div class="bio-content">
					<h1>Bienvenue chez Pasta Mira</h1>
					<p> Horaires d'ouvertures : </p>
                    <h6> LUN-DIM 12H- 00 H NON STOP </h6>
                    <p>Pasta Mira est un restaurant italien à Tunis. Embarquez dans un voyage gastronomique autour des saveurs d’outre mer.
                       Notre chef vous propose une variété pâtes.
                       Choisissez vos Pâtes (Spaghetti, Penne, Farfalle, Tagliatelle) et c’est servi.</p>
				</div>
			</div>
		</div>	
	</div>
</header>
<MenuContainer/>
       <Card/>
      </div>
    );
  }
}
export default ContainerUser