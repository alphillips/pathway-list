# pathway-list

React component for a list of "pathways" or links with arrows and nice borders.

## Usage

### Install
```
npm i @react-ag-components/pathway-list --save
```
### Use in your project
```
import PathwayList from '@react-ag-components/pathway-list'
```

```
<PathwayList>
  {this.state.list.map((item) =>
    <li key={item.id}>
      <a href={'#/item.link/' + item.id}>
        {item.description}
      </a>
    </li>
  )}
</PathwayList>
```

## Contributing

Get the repository
```
git clone https://github.com/alphillips/pathway-list
```

Update dependencies
```
npm install
```

Run the project
```
npm start
```

### Deploy to npm
#### Build
`npm run build -- --copy-files`

#### Publish
`npm publish --access public`
