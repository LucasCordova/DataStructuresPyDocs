import os
from datastructures.iqueue import IQueue
from datastructures.linkedlist import LinkedList
from typing import TypeVar

T = TypeVar('T')

class Deque[T](IQueue[T]):
    def __init__(self, data_type: type = object):
        raise NotImplementedError("Deque initialization is not implemented.")

    def enqueue(self, item: T) -> None:
        raise NotImplementedError("Method to add an item to the back of the deque is not implemented.")

    def dequeue(self) -> T:
        raise NotImplementedError("Method to remove an item from the front of the deque is not implemented.")

    def enqueue_front(self, item: T) -> None:
        """
        Adds an item to the front of the deque.

        **Parameters:**
            - `item` (`T`): The item to add to the front of the deque.

        **Raises:**
            - `TypeError`: If the item is not of the correct type.
        """
        raise NotImplementedError("Method to add an item to the front of the deque is not implemented.")

    def dequeue_back(self) -> T:
        """
        Removes and returns the item from the back of the deque.

        **Returns:**
            - `T`: The item removed from the back of the deque.

        **Raises:**
            - `IndexError`: If the deque is empty.
        """
        raise NotImplementedError("Method to remove an item from the back of the deque is not implemented.")

    def front(self) -> T:
        raise NotImplementedError("Method to get the front item of the deque is not implemented.")

    def back(self) -> T:
        raise NotImplementedError("Method to get the back item of the deque is not implemented.")

    def empty(self) -> bool:
        raise NotImplementedError("Method to check if the deque is empty is not implemented.")

    def __len__(self) -> int:
        raise NotImplementedError("Method to get the length of the deque is not implemented.")
    
    def __contains__(self, item: T) -> bool:
        raise NotImplementedError("Method to check if an item exists in the deque is not implemented.")
    
    def __eq__(self, other) -> bool:
        raise NotImplementedError("Method to compare two deques is not implemented.")
    
    def clear(self):
        raise NotImplementedError("Method to clear the deque is not implemented.")

    def __str__(self) -> str:
        raise NotImplementedError("Method to get the string representation of the deque is not implemented.")
    
    def __repr__(self) -> str:
        raise NotImplementedError("Method to get the detailed string representation of the deque is not implemented.")


if __name__ == '__main__':
    filename = os.path.basename(__file__)
    print(f'OOPS!\nThis is the {filename} file.\nDid you mean to run your tests or program.py file?\nFor tests, run them from the Test Explorer on the left.')
