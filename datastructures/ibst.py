# datastructures.ibst.IBinarySearchTree

"""
This module defines a BinarySearchTree interface that represents a binary search tree. 
This file lists the stipulations and more information on the methods and their expected behavior.
YOU SHOULD NOT MODIFY THIS FILE.
Implement the BinarySearchTree class in the bst.py file.
"""

from abc import ABC, abstractmethod
from typing import TypeVar, Generic, Optional, List

T = TypeVar('T')


class IBinarySearchTree(Generic[T], ABC):
    """BinarySearchTree is a binary tree data structure where nodes are ordered such that:
    - The left subtree contains only nodes with values less than the node's value.
    - The right subtree contains only nodes with values greater than or equal to the node's value.
    """

    @abstractmethod
    def insert(self, value: T) -> None:
        """Inserts a value into the binary search tree.

        Args:
            value (T): The value to insert.
        """
        pass

    @abstractmethod
    def search(self, value: T) -> bool:
        """Searches for a value in the binary search tree.

        Args:
            value (T): The value to search for.

        Returns:
            bool: True if the value is found, False otherwise.
        """
        pass

    @abstractmethod
    def delete(self, value: T) -> None:
        """Deletes a value from the binary search tree.

        Args:
            value (T): The value to delete.
        """
        pass

    @abstractmethod
    def inorder(self) -> List[T]:
        """Returns the inorder traversal of the binary search tree.

        Returns:
            List[T]: The list of values in inorder traversal.
        """
        pass
