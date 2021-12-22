import { Injectable } from '@angular/core';
import { Schema, model, connect } from 'mongoose';


// @Injectable({
//   providedIn: 'root'
// })
export class FeedService {
   
  mongoose  = require('mongodb').MongoClient;
  url:string = "mongodb://localhost:27017/";
  database_name:string = "seemo";
  collection_name:string = "feed_list";
  static id_ = 0;
  
  constructor(){
    
      this.createCollections();
  }

  createCollections() {
      let dbname = this.database_name;
      let cname = this.collection_name;
      this.mongoose .connect(this.url, function(err:any, db:any) {
        if (err) throw err;
      //   console.log("Database created!");
        let dbo = db.db(dbname);
          
        dbo.createCollection(cname , function(err:any, res:any) {
          if (!err) {
              // console.log("Collection created!");
              db.close();
          }
        });
    
      });
  }

  getAllFeeds()
  {
      let returnData:any;
      let dbname = this.database_name;
      let cname = this.collection_name;
      this.mongoose.connect(this.url, function(err:any, db:any) {
      if (err) throw err;
      let dbo = db.db(dbname);
          
        dbo.collection(cname).find({}).toArray(function(err:any, result:any) {
         if (err) throw err;
         console.log(result);
         db.close();
         returnData = result;
         
       });
     });
     return [
      {feed_content:"1", likes: 1, love:true, time:1},
      {feed_content:"2", likes: 2, love:false, time:2},
      {feed_content:"3", likes: 3, love:true, time:3}
    ];
  }

  dropCollection()
  {
      let dbname = this.database_name;
      let cname = this.collection_name;
      this.mongoose.connect(this.url, function(err:any, db:any) {
          if (err) throw err;
          var dbo = db.db(dbname);
          dbo.collection(cname).drop(function(err:any, delOK:any) {
          if (err) throw err;
          if (delOK) console.log("Collection deleted");
          db.close();
          });
      });
  }

  insertToCollectoin( content: string) {
      FeedService.id_ ++; 
      let dbname = this.database_name;
      let cname = this.collection_name;
      let time_ = Date.now();
      this.mongoose .connect(this.url, function(err:any, db:any) {
        var dbo = db.db(dbname);
          let obj_to_insert = {
              // _id: FeedService.id_,
              feed_content: content,
              likes: 0,
              love: false,
              post_time: time_,
          };
        dbo.collection(cname).insertOne(obj_to_insert, function(err:any, res:any) {
          if (err) throw err;
          console.log("1 document inserted");
          db.close();
        });
    
      });
    }


  findOneByContent(content: string)
  {
      let dbname = this.database_name;
      let cname = this.collection_name;
      this.mongoose.connect(this.url, function(err:any, db:any) {
          if (err) throw err;
          var dbo = db.db(dbname);
      
           //Find the first document in the customers collection:
          dbo.collection(cname).findOne({feed_content: content},{}, function(err:any, docs:any) {
              if (err) console.log(err);
              
              return docs;
              
          });
        });

  }
    updateLove(content:string)
    {
      let dbname = this.database_name;
      let cname = this.collection_name;
      this.mongoose.connect(this.url, function(err:any, db:any) {
        if (err) throw err;
        var dbo = db.db(dbname);
      
        dbo.collection(cname).findOne({feed_content: content},{}, function(err:any, docs:any) {
          if (err) console.log(err);
          let isLove = !docs.love;
          
          var myquery = { feed_content: content };
        var newvalues = { $set: { love:  isLove} };
          dbo.collection(cname).updateOne(myquery, newvalues, function(err:any, res:any) {
              if (err) throw err;
              db.close();
            });
          });

      });
      
    }
    
    updateLike(content:string)
    {
      let dbname = this.database_name;
      let cname = this.collection_name;
      this.mongoose.connect(this.url, function(err:any, db:any) {
        if (err) throw err;
        var dbo = db.db(dbname);
      
        dbo.collection(cname).findOne({feed_content: content},{}, function(err:any, docs:any) {
          if (err) console.log(err);
          let numLike = docs.likes + 1;
          
          var myquery = { feed_content: content };
        var newvalues = { $set: { likes:  numLike} };
          dbo.collection(cname).updateOne(myquery, newvalues, function(err:any, res:any) {
              if (err) throw err;
              db.close();
            });
          });

      });
      
    }
   
}
