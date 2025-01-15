## path-yesno
Simple example of using path-to-regexp to generate path matching based on a simpler syntax

## Usage

First install everything
```shell
npm i
```

Then Run the serialize script
```shell
npx ts-node src/serialize.ts
```

Should spit out the following, alone with a regex.txt that will be used by the deserialize-check script
```text
$ npx ts-node src/serialize.ts
true
false
true
false
true
false
```

Then run the deserialize-check script
```shell
npx ts-node src/deserialize-check.ts
```

Should spit out the following
```text
$ npx ts-node src/deserialize-check.ts
false
true
true
```
