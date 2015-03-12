/** @jsx React.DOM */
var React = require('react');
var Dropzone = require('../');

var DropzoneDemo = React.createClass({displayName: "DropzoneDemo",
    getInitialState: function () {
      return {
        files: []
      };
    },

    onDrop: function (files) {
      console.log('Received files: ', files);
      this.setState({
        files: files
      });
    },

    showFiles: function () {
      if (this.state.files.length <= 0) {
        return '';
      };

      var files = this.state.files;

      return (
        React.createElement("div", null, 
          React.createElement("h3", null, "Dropped files: "), 
          React.createElement("ul", null, 
            [].map.call(files, function (f, i) {
              return React.createElement("li", {key: i}, f.name + ' : ' + f.size + ' bytes.')
            })
          )
        )
        );
    },

    render: function () {
      var styling = {
        padding: 30
      };

      return (
          React.createElement("div", null, 
            React.createElement(Dropzone, {onDrop: this.onDrop, size: 150}, 
              React.createElement("div", {style: styling}, "Try dropping some files here, or click to select files to upload.")
            ), 
            this.showFiles()
          )
      );
    }
});

React.render(React.createElement(DropzoneDemo, null), document.body);

module.exports = DropzoneDemo;