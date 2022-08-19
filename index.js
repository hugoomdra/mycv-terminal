import inquirer from 'inquirer';
import chalk from 'chalk';
import boxen from 'boxen';
import emoji from 'node-emoji'

import formations from './data/formations.js'
import experiences from './data/experiences.js'
import reseaux from './data/reseaux.js'


console.clear()
console.log(boxen(chalk.cyan('Hugo MADUREIRA') + ' - CLI Description v1.0', {padding: 1}));


console.log('\n');
console.log('Bienvenue dans une CLI interactive qui va vous permettre dans savoir plus sur moi.');
console.log('N\'hésitez pas à me suivre sur Twitter : @hugoomdra')
console.log('\n');


var finished = false;


async function prompt(){
 await inquirer
  .prompt([
    {
      type: 'list',
      prefix: '>',
      name: 'choice',
      message: 'A vous de choisir :',
      choices: ['A propos de moi', 'Parcours Scolaire', 'Experiences', 'Mes réseaux', new inquirer.Separator(), 'Quittez la CLI'],
    },
  ])
  .then(answers => {
    
    if(answers.choice == 'A propos de moi'){
      console.clear()
      console.log(boxen(chalk.cyan('A propos de moi'), {padding: 1}));
      console.log('\n');
    }else if(answers.choice == 'Parcours Scolaire'){
      console.clear()
      console.log(boxen(chalk.cyan('Parcours Scolaire'), {padding: 1}));
      console.log('\n');

      formations.map((formation) => {
        console.log('> ' + chalk.cyan(formation.name));
        console.log(formation.diplome);
        console.log(chalk.gray(formation.annee));
        console.log('\n');
      })

    }else if(answers.choice == 'Experiences'){
      console.clear()
      console.log(boxen(chalk.cyan('Experiences'), {padding: 1}));
      console.log('\n');

      experiences.map((experience) => {
        console.log('> ' + chalk.cyan(experience.poste));
        console.log(experience.entreprise + ' · ' + experience.contrat);
        console.log(chalk.gray(experience.periode));
        console.log('\n');
        console.log(experience.description);
        console.log('\n');
      })
    }else if(answers.choice == 'Mes réseaux'){
      console.clear()
      console.log(boxen(chalk.cyan('Mes réseaux'), {padding: 1}));
      console.log('\n');

      console.log('N\'hésitez pas à me suivre sur mes différents réseaux !')
      console.log('\n');

      reseaux.map((reseau) => {
        console.log('> ' + chalk.cyan(reseau.name));
        console.log(reseau.link);
        console.log('\n');

      })
    }else if(answers.choice == 'Quittez la CLI'){
      console.clear()
      finished = true
    }

  });
}

while(!finished){
  await prompt();
}

