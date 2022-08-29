import React, {
  Component,
  Children,
  isValidElement
} from 'react';

import SC from './styled';

import { Trigger } from '../trigger';
import { Menu } from '../menu';

export class DropdownMenu extends Component {
  constructor(props) {
    super(props);
    
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  
  handleKeyDown(e) {
    const { onClose } = this.props;
    if (e.key === 'Escape') {
      onClose();
    }
  };
  
  handleClickOutside(e) {
    e.stopPropagation();
  
    const { id, onClose } = this.props;
    const path = e.path || (e.composedPath && e.composedPath());
    const el = document.getElementById(id);
    
    if (!path.includes(el)) {    
      onClose();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    const { id, isOpen, onClose, children } = this.props;
    const triggerChild = Children.map(children, child =>
      isValidElement(child) && child.type === Trigger ? child : null
    )?.shift();
    const menuChild = Children.map(children, child =>
      isValidElement(child) && child.type === Menu ? child : null
    )?.shift();   

    return (
      <SC.DropdownMenu {...this.props} id={id}>
        <SC.Trigger onClick={isOpen ? onClose : undefined}>
          {triggerChild}
        </SC.Trigger>
        {isOpen && <SC.Menu>{menuChild}</SC.Menu>}
      </SC.DropdownMenu>
    );
  } 
};

export default DropdownMenu;
