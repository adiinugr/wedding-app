import { Editor } from "@tinymce/tinymce-react";

const TinyMceEditor = ({ initValue, handleChange }) => {
  const example_image_upload_handler = (
    blobInfo,
    success,
    failure,
    progress
  ) => {
    var xhr, formData;

    xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.open("POST", "https://api.nehandev.xyz/api/image");

    xhr.upload.onprogress = function (e) {
      progress((e.loaded / e.total) * 100);
    };

    xhr.onload = function () {
      var json;

      if (xhr.status === 403) {
        failure("HTTP Error: " + xhr.status, { remove: true });
        return;
      }

      if (xhr.status < 200 || xhr.status >= 300) {
        failure("HTTP Error: " + xhr.status);
        return;
      }

      json = JSON.parse(xhr.responseText);

      if (!json || typeof json.location != "string") {
        failure("Invalid JSON: " + xhr.responseText);
        return;
      }

      success(json.location);
    };

    xhr.onerror = function () {
      failure(
        "Image upload failed due to a XHR Transport error. Code: " + xhr.status
      );
    };

    formData = new FormData();
    formData.append("image", blobInfo.blob(), blobInfo.filename());

    xhr.send(formData);
  };

  return (
    <div>
      <Editor
        apiKey={process.env.REACT_APP_TINYMCE_API}
        initialValue={initValue}
        init={{
          height: 280,
          menubar: false,
          external_plugins: {
            tiny_mce_wiris:
              "https://www.wiris.net/demo/plugins/tiny_mce/plugin.js",
          },
          plugins: [
            "advlist autolink lists link image charmap emoticons print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help imagetools wordcount",
            "image",
          ],
          toolbar:
            "undo redo | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | charmap emoticons |  fullscreen  preview save image | tiny_mce_wiris_formulaEditor | print fontselect fontsizeselect formatselect | outdent indent | numlist bullist checklist | forecolor backcolor removeformat table",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px } p {color:black}",
          images_upload_handler: example_image_upload_handler,
        }}
        onEditorChange={handleChange}
      />
    </div>
  );
};

export default TinyMceEditor;
