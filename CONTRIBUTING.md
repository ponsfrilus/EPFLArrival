Note: this is a `WIP` document !

# How to contribute
:heart: Pull request. If you have something you want to add or remove, please open a new pull request.
  * The project use [vuejs-templates/webpack](https://github.com/vuejs-templates/webpack) which
    comes with [ESLint](http://eslint.org/); be sure `npm run lint` doesn't report any error.
  * The file [./data/tiles.json](https://github.com/ponsfrilus/EPFLArrival/blob/master/data/tiles.json)
    is formatted with curious concept's [json formatter](https://jsonformatter.curiousconcept.com/).
  * [HoundCI](https://houndci.com) may be active on PR; Please [message me](https://t.me/ponsfrilus)
    if it's a problem.
  * Tests `npm test` should pass.

  * You might want to read [How to write the perfect pull request](https://github.com/blog/1943-how-to-write-the-perfect-pull-request)...

## Making Changes
* Fork the [EPFLArrival](https://github.com/ponsfrilus/EPFLArrival) repository in your account.
* Clone the fork on your computer.
* Create a topic branch from the `master` one.
  * To quickly create a topic branch based on master:  
   `git checkout -b fix/my_contribution master`  
   Please avoid working directly on the     `master` branch.
* Make commits of logical units.
* Make sure your commit messages are eloquent.
* Make sure you have added the necessary tests for your changes.
* Run _all_ the tests to assure nothing else was accidentally broken.
* Push your changes to a topic branch in your fork of the repository.
* Submit a pull request to the [EPFLArrival](https://github.com/ponsfrilus/EPFLArrival) repository.
* If you think you are waiting too long, please [message](https://t.me/ponsfrilus) me.

# Contributors :neckbeard:
Many thanks to all contributors:
* @ponsfrilus
* @stefanonepa
* @domq

See https://github.com/ponsfrilus/EPFLArrival/graphs/contributors for details.

Special thanks to [@stefanonepa](https://github.com/stefanonepa) and all the
[@epfl-dojo](https://github.com/epfl-dojo) team!

Note: the bullet list of contributors can be generated with:  
`curl -s https://api.github.com/repos/ponsfrilus/EPFLArrival/contributors | jq  -r '.[] | .login' | sed 's/^/\ \ * @/'`
