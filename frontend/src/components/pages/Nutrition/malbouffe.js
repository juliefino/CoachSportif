import React, {useState} from 'react';
import '../../Nutrition.css';
import {motion} from 'framer-motion';


function Malbouffe () {
  return (

      <div className='article'>
          <motion.h1 className='titre' animate={{fontSize: 50, color: '#4f3a3c'}}>LA MALBOUFFE</motion.h1>
          <div className= 'contenu'>
        Le chocolat, les hamburgers, les frites, … Tous ces aliments sont considérés comme étant de la nourriture grasse étant mauvaise pour la santé si celle-ci est consommée en abondance. Cet article vous explique comment/pourquoi sans pour autant se priver. <br/> <br/>
Comme on le dit si souvent, « un esprit sain dans un corps sain », la privation ne vous apporte rien sauf de la frustration, c’est pourquoi nous vous présentons quelques alternatives alimentaires afin de manger plus sainement tout en ayant un plaisir gustatif. <br/> <br/>
Commençons avec un aliment simple : le chocolat. Chéri de beaucoup de personnes, le chocolat est si apprécié car, une fois consommé, il libère de l’endorphine dans votre cerveau vous faisant passer un agréable moment. Il est donc quasi impossible pour un être humain de s’en passer, alors que faire ? Tout simplement passer au chocolat noir, ce chocolat n’a que des avantages : l’amélioration des capacités sportives, réduction de l’hypertension, améliore la concentration, et surtout, il nous aide à perdre du poids (grâce aux catéchines, un antioxydant favorisant la perte de poids). <br/> <br/>
Nous vous avions également parlé des hamburgers, un met délicieux accompagnés de ses frites, soyons clairs, impossible de s’en priver. L’alternative la « plus » saine serait d’opter pour un hamburger de volaille à la place de bœuf et ce tout simplement parce que la volaille est une des viandes les moins grasse ce qui limite l’apport en cholestérol. En ce qui concerne les frites cuites dans de l’huile ou encore de la graisse, une technique culinaire permet de faire des frites croustillantes, également cuites à l’huile mais beaucoup moins grasses car avant de les mettre dans un bain d’huile, on va les cuire dans une casserole d’eau bouillante pendant plus ou moins 7 minutes. Le tour est joué, vous avez votre hamburger-frites ! <br/> <br/>
Pour conclure, n’oubliez pas que c’est article ne comporte que des conseils et qu’il est important de se faire plaisir dans la vie sans se priver !
        </div>
    </div>
  );
};
export default Malbouffe;