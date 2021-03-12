
# Submission Rules and Guidelines

For specific inquiries regarding a given exercise, please post on the *relevant Slack channel*  for that exercise.

> **Please do not tend to answer other people's inquiries, to make sure no one is misleading the others. I will answer the exercise inquiries.
Make sure to review issues as my answers there will be applied to all of you.**


## General Guidelines & Code Review Criteria
1. Code must be written according to the Coding Standards defined by default `eslint` rules for `JavaScript`, `React` and `React-Native`.
Make sure to install and run those plugins by following the [eslint guide](./eslint.md)
2. Define meaningful variable and function names. Your code should be simple, clear and readable.
3. Comments are **NOT** welcome. I want to read code! Use comments only to explain some odd decision or explain some hard-to-read algorithm.
4. Do not use extra empty new-lines.
5. Do not submit not-working/compiling code.
6. Do not submit dead code (code block which never runs).
7. Your code should be well indented and organized.
8. Your code should be well design, divided to modules and functions. Properly using software engineering principles of reusability, inheritance (or mixin), composition.
9. Your code should implement covered topics functionality, though enhancements are always welcome!


## Submission Rules
1. Submission is **SOLO**<br>
(No, I don't care if you're a gang since the kindergarten)
2. Submit **On Time!**
    * MILUIM is an exception, if you provide a "release from service" (מכתב שחרור) note.
    * First relation medical hospitality is an exception.<br>

    In case you need to use one of the above exceptions, please contact me in person BEFORE the submission due date. You will not be scored until you provide proper documentation.<br>
    > Delays that was not approved in advanced will lead to 10%-100% score penalty.

## What should be submitted?
1. The file you submit must be in the following format:<br>
`FirstStudentFullName_<studentId>.zip` -- SOLO submission
`FirstStudentFullName_<studentId>_SecondStudentFullName_<studentId>.zip` -- in pairs

    For Example: `JimiHendrix_011112222_GaryNuman_033334444.zip`
2. Inside the zip file, there should be only one folder which is the project itself and must have the exact same name as above.

    For Example:
    ```
    JimiHendrix_011112222_GaryNuman_033334444.zip
    |
    |
    ---> JimiHendrix_011112222_GaryNuman_033334444
          |
          |
          ---> src/
          ---> index.js
          ---> package.json
          ---> .eslintrc
          ---> ...
          ---> ...
    ```
3. The file must be compressed in `zip` format and ends with `.zip` extension.
4. The following folders must be **excluded**:
    * `node_modules`
    * `.vscode`
    * `.idea`
    * `.expo`
    * `./ios/build`
    * `./android/build`
    * `./android/.idea`
    * `./android/.gradle`
    * `./android/*.iml`

5. If you followed the the previous bullets correctly, the resulted `.zip` file size should be very small (less than 2MB)
6. In your project's `package.json` file, you must add your details in the following schema:
```
"checkSubmission": {
    "ex": Number,
    "students": [
        {"id": "string", "fullName": "string", "email": "string"}
        {"id": "string", "fullName": "string", "email": "string"}
    ],
    "os": "string", // one of [Mac, Linux, Windows]
    "device": "string", // one of [Android, iOS]
    "submissionDate": "string", // in format DD/MM/YYYY,
    "delay": Boolean,
    "delayReason": "string", // optional
    "comments": "string" // optional
}
```
For Example:
```json
"checkSubmission": {
    "ex": "1",
    "students": [
      { "id": "011112222", "fullName": "Jimi Hendrix", "email": "jimi@hendrix.com" },
      { "id": "033334444", "fullName": "Gary Numan", "email": "gary@numan.com" }
    ],
    "os": "Mac",
    "device": "iOS",
    "submissionDate": "23/03/2021",
    "delay": true,
    "delayReason": "Not enough time.",
    "comments": "Feature number 4 works only when running in debug mode."
  }
```

## How to submit?
Moodle...


## Exercise Check & Report
When checking is over, you will receive a the score and the check report in moodle.

> Any kind of violence of this document guidelines - will lead to score penalty.<br>
This document might be updated from time to time - please make sure to be aligned each submission.
