#!/usr/bin/env node

'use strict';

const vorpal = require('vorpal')();
const make = require('./actions/make.js');
const remove = require('./actions/remove.js');
const init = require('./actions/init.js');

vorpal
    .command('make <type> <name>')
    .option('-s, --stateless', 'Create Stateless component.')
    .option('-v, --view', 'Create view file')
    .option('-f, --functional', 'Create functional view')
    .description('Create project component.')
    .action(make);

// vorpal
//     .command('remove <type> <name>')
//     .description('Remove project component.')
//     .action(remove);

// vorpal
//     .command('init')
//     .description('Initialize project.')
//     .action(init);

vorpal
    .delimiter('react$')
    .show();