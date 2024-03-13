from typing import Any


class ArrayStack:
    """ Class ArrayStack - representing a fixed-size stack using a 1D Array object.
        Stipulations:
        1. Must use an Array object as the internal data structure from the Array assignment.
        2. Must adhere to the docstring requirements per method, including raising
            raising appropriate exceptions where indicated.
    """

    def __init__(self, max_size: int = 0) -> None:
        """ Constructor

        Example:
            >>> stack = ArrayStack(10)

        Args:
            max_size (int): the desired size of the stack.

        Returns:
            None
        """
        raise NotImplementedError('ArrayStack.__init__')

    def push(self, item: Any) -> None:
        """ Push an item onto the stack.
        
        Example:
            >>> stack = ArrayStack(10)
            >>> stack.push('cat')
            
        Args:
            item (Any): the item to enqueue.
                
        Returns:
            None

        Raises:
            IndexError: if the stack is full.
        """
        raise NotImplementedError('ArrayStack.push')

    def pop(self) -> Any:
       """ Pop an item from the stack and return the item.
       
        Example:
            >>> stack = ArrayStack(10)
            >>> stack.push('cat')
            >>> item = stack.pop()
            >>> print(item)
            cat

        Returns:
            Any: the item that is popped.

        Raises:
            IndexError: if the stack is empty.

        """
       raise NotImplementedError('ArrayStack.pop') 

    def clear(self) -> None:
        """Clear the stack.
        
        Example:
            >>> stack = ArrayStack(10)
            >>> stack.push('cat')
            >>> stack.clear()
            >>> print(stack.empty)
            True
                
        Returns:
            None
        """
        raise NotImplementedError('ArrayStack.clear')
        
    @property
    def top(self) -> Any:
        """Get the item at the top of the stack.
            
        Example:
            >>> stack = ArrayStack(10)
            >>> stack.push('cat')
            >>> print(stack.top)
            cat
        
        Returns:
            Any: the item that is at the top of the stack.
            
        Raises:
                IndexError: if the stack is empty.
        """
        raise NotImplementedError('ArrayStack.top')

    @property
    def max_size(self) -> int:
        """Get the maximum size of the stack.

        Example:
            >>> stack = ArrayStack(10)
            >>> print(stack.max_size)
            10

        Returns:
            int: the max size of the stack.
        """
        raise NotImplementedError('ArrayStack.max_size')
    
    @property
    def full(self) -> bool:
        """Check whether the stack is full.
        
        Example:
            >>> stack = ArrayStack(10)
            >>> print(stack.full)
            False
            
        Returns:
            bool: True if the stack is full, False otherwise.
        """
        raise NotImplementedError('ArrayStack.full')

    @property
    def empty(self) -> bool:
        """Check whether the stack is empty.
        
        Example:
            >>> stack = ArrayStack(10)
            >>> print(stack.empty)
            True
        """
        raise NotImplementedError('ArrayStack.empty')

    def __eq__(self, other: object) -> bool:
        """Check if two stacks are equal.
        
        Example:
            >>> stack1 = ArrayStack(10)
            >>> stack2 = ArrayStack(10)
            >>> print(stack1 == stack2)
            True
            
        Args:
            other (object): the object to compare to.
            
        Returns:
            bool: True if the stacks are equal, False otherwise.
        """
        raise NotImplementedError('ArrayStack.__eq__')

    def __ne__(self, other) -> bool:
        """Check if two stacks are not equal.
        
        Example:
            >>> stack1 = ArrayStack(10)
            >>> stack2 = ArrayStack(10)
            >>> print(stack1 != stack2)
            False
            
        Args:
            other (object): the object to compare to.
            
        Returns:
            bool: True if the stacks are not equal, False otherwise.
        """
        raise NotImplementedError('ArrayStack.__ne__')

    def __len__(self) -> int:
        """Get the number of items on the stack.
        
        Example:
            >>> stack = ArrayStack(10)
            >>> print(len(stack))
            0
        
        Returns:
            int: the number of items on the stack.
        """
        raise NotImplementedError('ArrayStack.__len__')

    def __str__(self) -> str:
        """Get a string representation of the stack.
        
        Example:
            >>> stack = ArrayStack(10)
            >>> print(stack)
            []
        
        Returns:
            str: the string representation of the stack.
        """
        raise NotImplementedError('ArrayStack.__str__')
    
    def __repr__(self) -> str:
        """Get a string representation of the stack.
        
        Example:
            >>> stack = ArrayStack(10)
            >>> print(stack)
            []
        
        Returns:
            str: the string representation of the stack.
        """
        raise NotImplementedError('ArrayStack.__repr__')
