from typing import Any

class ListStack:
    """ Class ListStack - representing a stack using a LinkedList
        Stipulations:
        1. Must use a LinkedList as the internal data structure from the LinkedList assignment.
        2. Must adhere to the docstring requirements per method, including raising
            raising appropriate exceptions where indicated.
    """
    def __init__(self) -> None:
        """ Constructor.
        
        Examples:
            >>> stack = ListStack()
            
        Returns:
            None
        """
        raise NotImplementedError('ListStack.__init__')


    def push(self, item: Any) -> None:
        """ Push an item onto the stack.
        
        Examples:
            >>> stack = ListStack()
            >>> stack.push('cat')
            
        Args:
            item (Any): the item to push.
            
        Returns:
            None
        
        """
        raise NotImplementedError('ListStack.push')

    def pop(self) -> Any:
        """ Pop an item from the stack and return the item.
        
        Examples:
            >>> stack = ListStack()
            >>> stack.push('cat')
            >>> item = stack.pop()
            >>> print(item)
            cat
            
        Returns:
            Any: the item that is popped.
            
        Raises:
            IndexError: if the stack is empty.
        """
        raise NotImplementedError('ListStack.pop')

    def clear(self) -> None:
        """ Clear the stack.
        
        Examples:
            >>> stack = ListStack()
            >>> stack.push('cat')
            >>> stack.clear()
            >>> print(stack.empty)
            True
            
        Returns:
            None
        """
        raise NotImplementedError('ListStack.clear')

    @property
    def top(self) -> Any:
        """ Get the item at the top of the stack.
        
        Examples:
            >>> stack = ListStack()
            >>> stack.push('cat')
            >>> print(stack.top)
            cat
            
        Returns:
            Any: the item that is at the top of the stack.
            
        Raises:
            IndexError: if the stack is empty.
        """
        raise NotImplementedError('ListStack.top')

    @property
    def empty(self) -> bool:
        """ Check if the stack is empty.
        
        Examples:
            >>> stack = ListStack()
            >>> print(stack.empty)
            True
        
        Returns:
            bool: True if the stack is empty, False otherwise.
        """
        raise NotImplementedError('ListStack.empty')

    def __eq__(self, other: object) -> bool:
       """ Equality operator ==
       
       Examples:
           >>> stack1 = ListStack()
           >>> stack2 = ListStack()
           >>> print(stack1 == stack2)
           True
           
        Args:
            other (ListStack): the other ListStack to compare to
        """
       raise NotImplementedError('ListStack.__eq__')

    def __ne__(self, other: object) -> bool:
        """ Inequality operator !=
        
        Examples:
            >>> stack1 = ListStack()
            >>> stack2 = ListStack()
            >>> print(stack1 != stack2)
            False
            
        Args:
            other (ListStack): the other ListStack to compare to

        Returns:
            bool: True if the stacks are not equal, False otherwise.
        """
        raise NotImplementedError('ListStack.__ne__')

    def __len__(self) -> int:
        """ Get the number of items on the stack.
        
        Examples:
            >>> stack = ListStack()
            >>> stack.push('cat')
            >>> print(len(stack))
            1
        
        Returns:
            int: the number of items on the stack.
        """
        raise NotImplementedError('ListStack.__len__')

    def __str__(self) -> str:
        """ Get the string representation of the stack.
        
        Examples:
            >>> stack = ListStack()
            >>> stack.push('cat')
            >>> print(stack)
            'cat'
        
        Returns:
            str: the string representation of the stack.
        """
        raise NotImplementedError('ListStack.__str__')
    
    def __repr__(self) -> str:
        """ Get the string representation of the stack.
        
        Examples:
            >>> stack = ListStack()
            >>> stack.push('cat')
            >>> print(stack)
            'cat'
        
        Returns:
            str: the string representation of the stack.
        """
        raise NotImplementedError('ListStack.__repr__')
