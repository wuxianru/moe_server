/**
 * Created by wuxianru on 15/6/5.
 */

module.exports = {
    list: function (model) {
        return function (req, res) {
            queryData=req.body || {};

            model.find(queryData).exec(function (err, doc) {
                if (err) {
                    res.status(400).send(err.message);
                    return;
                }
                res.json(doc);
            });
        };
    },
    detail:function(model){
        return function (req,res){
            model.findById(req.params.id).exec(function (err, doc) {
                if (err) {
                    res.status(400).send(err.message);
                    return;
                }
                res.json(doc);
            });
        }

    },
    delete:function(model){
        return function(req,res) {
            userModel.findOneAndRemove(req.params.id, undefined, function (err, doc) {
                if (err) {
                    res.status(400).send(err.message);
                    return;
                }
                res.json("success");
            });
        }
    },
    create:function(model){
        return function(req,res){
            modelData=req.body;
            user = new model(modelData);
            user.save(function (err, doc) {
                if (err) {
                    res.status(400).send(err.message);
                    return;
                }
                res.send(doc);
            });
        }
    },
    update:function(model){
        return function(req ,res){
            modelData=req.body;
            userModel.findByIdAndUpdate(modelData.id, modelData, function (err, doc) {
                if (err) {
                    res.status(400).send(err.message);
                    return;
                }
                res.json("success");
            });

        }
    }
}