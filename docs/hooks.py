import os
import shutil

def copy_get(config, **kwargs):
    site_dir = config['site_dir']
    shutil.copy('datastructures/iarray.py', os.path.join(site_dir, 'iarray.py'))
    shutil.copy('datastructures/array.py', os.path.join(site_dir, 'array.py'))
    shutil.copy('datastructures/test_array.py', os.path.join(site_dir, 'test_array.py'))
    shutil.copy('datastructures/iavltree.py', os.path.join(site_dir, 'iavltree.py'))
    shutil.copy('datastructures/test_avltree_inserts.py', os.path.join(site_dir, 'test_avltree_inserts.py'))