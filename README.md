# Lab 8 - Starter

**Partners:** Sophia Yu, Vincent Vo

1. In our recipe project development pipeline, we would fit out automated tests within a Github action that runs whenever code is pushed. Putting the tests here allows us to check our code every time a change is made, isolating the code that was just written to determine if it works properly. In addition, putting it in Github Actions allows us to run these tests faster and automatically.
2. Yes
3. No, unit testing is not able to test how individual components interact with other components on the application/feature level. This feature of writing and sending messages to another user contains many smaller functionalities. These smaller functions can be unit-tested individually, but not the as a whole.
4. Yes, we can use unit testing for this because we are testing one single function, without having to check its interactions with other components.