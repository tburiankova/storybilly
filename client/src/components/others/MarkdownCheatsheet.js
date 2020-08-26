import React from 'react';

import { List, Item } from './MarkdownCheatsheet.styles';

const MarkdownCheatsheet = () => {
  return (
    <List>
      <Item># Heading level 1</Item>
      <Item>## Heading level 2</Item>
      <Item>### Heading level 3</Item>
      <Item>**bold text**</Item>
      <Item>*italic text*</Item>
      <Item>> blockquote</Item>
      <Item>
        Link: <br />
        [title](https://www.example.com)
      </Item>
      <Item>
        For a line break, leave 2 or more empty spaces at the end of a line and
        hit return.
      </Item>
    </List>
  );
};

export default MarkdownCheatsheet;
