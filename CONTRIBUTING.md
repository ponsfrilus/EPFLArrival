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
   `git checkout -b tile/my_contribution master`  
   Please avoid working directly on the `master` branch.
* Make commits of logical units.
* Make sure your commit messages are eloquent.
* Make sure you have added the necessary tests for your changes.
* Run _all_ the tests to assure nothing else was accidentally broken. (`npm run local` & `npm run test`)
* Push your changes to a topic branch in your fork of the repository.
* Submit a pull request to the [EPFLArrival](https://github.com/ponsfrilus/EPFLArrival) repository.
* If you think you are waiting too long, please [message](https://t.me/ponsfrilus) me.

Note: if your fork is behind the upstream repository, check [How to sync a forked repository](https://help.github.com/articles/syncing-a-fork/).

## Tiles information / recommendation
A tile is a bunch of JSON data in the `./data/tiles.json` file.

:bulb: **Heads up:** In order to serve your local copy of `tiles.json` you will have to use `npm run local`, while `npm run dev` will serve remote JSON data from  [github](https://github.com/ponsfrilus/EPFLArrival/blob/master/data/tiles.json).

For example, the "GO" tile contains:
```
{
  "title":"GO",
  "desc_fr":"Service de raccourcissement d'URLs",
  "desc_en":"URLs shortener service",
  "link":"http://go.epfl.ch",
  "tags":[
    "service",
    "url",
    "website",
    "go"
  ],
  "maincat":[
    "service",
    "communication"
  ]
}
```

  * `title` is a short title to name the tile;
  * `desc_fr` a hook/brief/short sentence describing the tile (in French);
  * `desc_en` a hook/brief/short sentence describing the tile (in English);
  * `link` the link URL (in English) of the tile (No trailing "/" !);
  * `tags` the look-up table for the filter;
  * `maincat` the color and radio filter. Choose between [ "others", "service", "communication", "identity", "backup"] where:  
    - `service` is for services as help desk or reprography;
    - `communication` is for all tools to communicate as email, "UC";
    - `identity` is for IAM (identity and access management) or "me@EPFL";
    - `backup` for any plate-form to store or share data, as "my" or "gDrive";
    - `others` (and until more precise categories are defined), for everything else.

  Note that more than one category is allowed but color will only match the first one (consider the first one as the most important one).

# Contributors :neckbeard:
Many thanks to all contributors! See [CONTRIBUTORS](./CONTRIBUTORS.md) file for a list and have a look to https://github.com/ponsfrilus/EPFLArrival/graphs/contributors for details.

Special thanks to [@stefanonepa](https://github.com/stefanonepa) and all the
[@epfl-dojo](https://github.com/epfl-dojo) team!

Note: the bullet list of [contributors](./CONTRIBUTORS.md) is generated with:  
`curl -s https://api.github.com/repos/ponsfrilus/EPFLArrival/contributors | jq  -r '.[] | .login' | sed 's/^/\ \ * @/'`
