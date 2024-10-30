class HashTable {
    constructor(size = 50){
        this.buckets = new Array(size);
        this.size = size;
    }

    hash(key){
        return key.toString().length%this.size;
    }

    setItem(key,value){
        let index = this.hash(key);

        if(! this.buckets[index]){
            this.buckets[index]=[];
        }
         
        this.buckets[index].push({key,value});
        return index;
    }

    getItem(key){
    let index = this.hash(key);

    if(! this.buckets[index]) return null;

    for (let bucket of this.buckets[index]){
        if(bucket[0]=key){
            return bucket[1];
        }
    }
    }
}

const hashTable = new HashTable();
hashTable.setItem("bk101","Data structures algorithms");
hashTable.setItem("bk108","Data analytics");
hashTable.setItem("bk200","Cyber security");
hashTable.setItem("bk259","Business Intelligence");
hashTable.setItem("bk300","S/W Development");

hashTable.getItem("bk101");
console.log(hashTable.getItem("bk101"));