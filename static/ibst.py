# datastructures.ibinarysearchtree.IBinarySearchTree

"""
This module defines a BinarySearchTree interface that represents a binary search tree. 
This file lists the stipulations and more information on the methods and their expected behavior.
YOU SHOULD NOT MODIFY THIS FILE.
Implement the BinarySearchTree class in the bst.py file.
"""

from abc import ABC, abstractmethod
from typing import TypeVar, Generic, Optional, List

K = TypeVar('K')  # Key type for ordering in the tree
V = TypeVar('V')  # Value type for storing associated data


class IBinarySearchTree(Generic[K, V], ABC):
    """BinarySearchTree is a binary tree data structure where nodes are ordered based on keys, and each node stores
    an associated value. The left subtree contains only nodes with keys less than the node's key, 
    and the right subtree contains only nodes with keys greater than or equal to the node's key.
    """

    @abstractmethod
    def insert(self, key: K, value: V) -> None:
        """Inserts a key-value pair into the binary search tree.

        Args:
            key (K): The key used to order the nodes in the tree.
            value (V): The value associated with the key.
        """
        pass

    @abstractmethod
    def search(self, key: K) -> Optional[V]:
        """Searches for a key in the binary search tree and returns the associated value if found.

        Args:
            key (K): The key to search for.

        Returns:
            Optional[V]: The value associated with the key if found, or None if the key is not present.
        """
        pass

    @abstractmethod
    def delete(self, key: K) -> None:
        """Deletes a key and its associated value from the binary search tree.

        Args:
            key (K): The key to delete.

        Raises:
            KeyError: If the key is not present in the tree.
        """
        pass

    @abstractmethod
    def inorder(self) -> List[K]:
        """Returns the inorder traversal of the binary search tree, containing the keys in sorted order.

        Returns:
            List[K]: The list of keys in inorder traversal.
        """
        pass

    @abstractmethod
    def size(self) -> int:
        """Returns the number of nodes in the binary search tree.

        Returns:
            int: The number of nodes in the tree.
        """
        pass
