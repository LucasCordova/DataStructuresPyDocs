from typing import Any

class ArrayQueue:
    """ Class ArrayQueue - representing a circular array queue using a 1D Array
            Stipulations:
            1. Must use an Array object as the internal data structure.
            2. Storage must wrap-around the array.
            3. Must adhere to the docstring requirements per method, including raising
               raising appropriate exceptions where indicated.
    """

    def __init__(self, max_size: int = 0) -> None:
        """ Constructor
        
        Examples:
            >>> queue = ArrayQueue(10)

            Args:
                max_size (int): the desired size of the queue.

        Returns:
            None
        """
        raise NotImplementedError('ArrayQueue.__init__')

    def enqueue(self, item: Any) -> None:
        """ Enqueue an item onto the queue.
        
        Examples:
            >>> queue = ArrayQueue(10)
            >>> queue.enqueue('cat')
            
        Args:
            item (Any): the item to enqueue.
            
        Returns:
            None
        """
        raise NotImplementedError('ArrayQueue.enqueue')


    def dequeue(self) -> Any:
        """ Dequeue an item from the queue and return the item.
        
        Examples:
            >>> queue = ArrayQueue(10)
            >>> queue.enqueue('cat')
            >>> item = queue.dequeue()
            >>> print(item)
            cat
            
        Returns:
            Any: the item that is dequeued.
            
        Raises:
            IndexError: if the queue is empty.
        """
        raise NotImplementedError('ArrayQueue.dequeue')

    def clear(self) -> None:
        """ Clear the queue.
        
        Examples:
            >>> queue = ArrayQueue(10)
            >>> queue.enqueue('cat')
            >>> queue.clear()
            
        Returns:
            None
        """
        raise NotImplementedError('ArrayQueue.clear')

    @property
    def front(self) -> Any:
        """ Get the item at the front of the queue.
        
        Examples:
            >>> queue = ArrayQueue(10)
            >>> queue.enqueue('cat')
            >>> print(queue.front)
            cat
            
        Returns:
            Any: the item that is at the front of the queue.
        
        Raises:
            IndexError: if the queue is empty.
        """
        raise NotImplementedError('ArrayQueue.front')

    @property
    def full(self) -> bool:
        """ Check whether the queue is full.
        
        Examples:
            >>> queue = ArrayQueue(10)
            >>> print(queue.full)
            False
            
        Returns:
            bool: True if the queue is full, False otherwise.
        """
        raise NotImplementedError('ArrayQueue.full')

    @property
    def empty(self) -> bool:
        """ Check whether the queue is empty.
        
        Examples:
            >>> queue = ArrayQueue(10)
            >>> print(queue.empty)
            True
            
        Returns:
            bool: True if the queue is empty, False otherwise.
        """
        raise NotImplementedError('ArrayQueue.empty')

    def __eq__(self, other: object) -> bool:
        """ Equality operator ==
        
        Examples:
            >>> queue1 = ArrayQueue(10)
            >>> queue2 = ArrayQueue(10)
            >>> print(queue1 == queue2)
            True
            
        Args:
            other (object): the instance to compare self to.
            
        Returns:
            bool: True if the queues are equal (deep check).
        """
        raise NotImplementedError('ArrayQueue.__eq__')

    def __ne__(self, other: object) -> bool:
        """ Inequality operator !=
        
        Examples:
            >>> queue1 = ArrayQueue(10)
            >>> queue2 = ArrayQueue(10)
            >>> print(queue1 != queue2)
            False
            
        Args:
            other (object): the instance to compare self to.
        
        Returns:
            bool: True if the queues are not equal (deep check).
        """
        raise NotImplementedError('ArrayQueue.__ne__')

    def __len__(self) -> int:
        """ Get the number of items on the queue.
        
        Examples:
            >>> queue = ArrayQueue(10)
            >>> queue.enqueue('cat')
            >>> print(len(queue))
            1
            
        Returns:
            int: the number of items on the queue.
        """
        raise NotImplementedError('ArrayQueue.__len__')

    def __str__(self) -> str:
        """ Get the string representation of the queue.
        
        Examples:
            >>> queue = ArrayQueue(10)
            >>> queue.enqueue('cat')
            >>> print(queue)
            'cat'
            
        Returns:
            str: the string representation of the queue.
        """
        raise

    def __repr__(self) -> str:
        """ Get the string representation of the queue.
        
        Examples:
            >>> queue = ArrayQueue(10)
            >>> queue.enqueue('cat')
            >>> print(queue)
            'cat'
            
        Returns:
            str: the string representation of the queue.
        """
        raise NotImplementedError('ArrayQueue.__repr__')
                                  
