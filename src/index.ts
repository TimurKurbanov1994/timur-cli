#!/usr/bin/env node
import { Command } from 'commander';



const program = new Command();
program
  .name('timur-cli')
  .description('This app CLI was developed by Timur!')
  .version('0.8.0');

program.command('secret')
  .description('I show my secret')
  .option('--b, -big', 'display big secret')
  .action((options) => {
    if (options.Big) 
    {console.log('Timur ate a whole chocolate bar in green packaging! :D')} 
    else {
      console.log('Timur eats at night')
    };
  });

program.parse()