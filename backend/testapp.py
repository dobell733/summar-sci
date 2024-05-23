from flask import Flask, request, jsonify
from flask_cors import CORS
from google.cloud import storage
import time

app = Flask(__name__)
CORS(app)

@app.route('/summarize', methods=['POST'])
async def summarize():
    """
    Endpoint for summarizing a PDF file.

    This endpoint receives a PDF file in the request and saves it to Google Cloud Storage.
    It then passes the cloud storage path of the file to the `summarize_file` function to generate a summary.
    Finally, it deletes the file from Google Cloud Storage and returns the summary as a JSON response.

    Returns:
        A JSON response containing the summary of the PDF file.

    Raises:
        400: If no file part is found in the request.
    """
    print("starting sleep")

    time.sleep(10)

    # Pass cloud storage path to the summarize_file function
    summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet tristique dolor a consectetur. Nulla vitae massa et nibh rutrum auctor. Suspendisse lorem quam, eleifend ac tempus vel, dictum ut ligula. Morbi molestie sed ligula ut pellentesque. Sed vestibulum sagittis urna, vitae luctus nisi pulvinar sit amet. Ut quis purus aliquet, placerat nunc eu, efficitur sapien. Quisque molestie urna vel tortor volutpat, eget accumsan ligula interdum. Phasellus consequat ac enim vitae sagittis.\n\nCurabitur tempor justo in eleifend aliquet. Etiam tristique turpis eget elit rutrum, nec convallis augue vulputate. Praesent at neque sem. Suspendisse in placerat magna, quis cursus leo. Sed euismod malesuada mi, nec egestas purus iaculis a. Quisque elementum blandit dui, gravida tincidunt lacus accumsan nec. Proin sit amet metus id elit dapibus iaculis vel ac lacus. Maecenas nec elementum nulla. Maecenas quam orci, euismod ut lacinia vel, imperdiet a tortor. Vivamus vitae mollis dui. Proin sit amet ante eu mi euismod molestie. Duis pretium tellus et bibendum mattis. Etiam nec tincidunt urna. Integer vestibulum non justo et sollicitudin. Quisque bibendum lectus non maximus malesuada. Phasellus aliquam, mi vehicula ullamcorper volutpat, mauris tortor elementum elit, at venenatis tortor justo non libero.\n\nMorbi porttitor arcu sit amet dui rutrum luctus. Proin at ante vitae nulla blandit auctor. Ut feugiat sagittis nisi, porta laoreet ante tristique eu. Donec vel nisi ornare, efficitur erat a, volutpat nibh. Quisque eget ultrices ipsum, viverra laoreet nisi. Donec consectetur, tortor eget ullamcorper faucibus, eros neque gravida urna, feugiat venenatis libero mauris id massa. Donec quis vestibulum arcu, at suscipit ex. Sed finibus dapibus nunc a aliquam.\n\nDonec laoreet ultrices diam ut imperdiet. Ut eros ipsum, feugiat facilisis nulla eu, euismod ornare diam. Nunc porttitor augue sed eleifend porta. Curabitur accumsan nulla quam, vel vehicula dui tempor vulputate. Maecenas mauris nunc, maximus vel ultrices ut, imperdiet ac sapien. Proin sed facilisis odio. Nullam purus ligula, aliquet quis eleifend ac, aliquam non purus. Cras nec libero viverra, vulputate magna sed, molestie massa. Donec augue felis, maximus non lacinia ut, eleifend nec neque. Vivamus accumsan semper ipsum, quis eleifend risus mattis eget. Nullam dignissim ullamcorper euismod.\n\nVivamus lobortis elementum pretium. Curabitur et leo commodo ante finibus hendrerit vel ac dui. Cras et feugiat lacus. Donec vitae tincidunt urna. Donec sed enim id tellus luctus rutrum ut nec quam. Pellentesque ex ante, aliquam a finibus eu, porta a mi. Sed bibendum in nisi et tincidunt. Aenean faucibus facilisis turpis, quis porta mauris mollis vel. Ut eu consequat mauris, at posuere odio. Nunc sit amet dolor a est pretium convallis."


    return jsonify({'summary': summary})

if __name__ == '__main__':
    app.run(debug=True)
    