import re
import textwrap

# NOTE: Much of this code was generated by either ChatGPT 4 or Claude 3 Opus and then further refined by myself. 
#       AI is much better at knowing how to clean files and use regex than I ever hope or care to be.
#       I am crediting the use of these tools per the instructions here: https://canvas.oregonstate.edu/courses/1958108/pages/exploration-can-and-should-you-use-ai-tools-in-capstone-2?module_item_id=24265452

def remove_newlines_and_carriage_returns(text):
    """
    Removes newline and carriage return characters from the given text.

    Args:
        text (str): The text to be processed.

    Returns:
        str: The text with newline and carriage return characters removed.
    """
    text = text.replace('\n', ' ').replace('\r', '')
    text = re.sub(r'\s+', ' ', text)
    return text


def extract_from_introduction(text):
    """
    Extracts the text starting from the "Introduction" section onwards, removing everything before it.

    Args:
        text (str): The text to be processed.

    Returns:
        str: The text starting from the "Introduction" section.
    """
    pattern = r'.*?(?=Introduction\s+)'
    match = re.search(pattern, text, flags=re.DOTALL)
    if match:
        return text[match.end():].strip()
    else:
        return text


def remove_references(text):
    """
    Removes the references section from the given text, starting from the end.

    Args:
        text (str): The text to be processed.

    Returns:
        str: The text with the references section removed.
    """
    pattern = r'.*?(?=References\s+(?:\[|\d).*$)'
    match = re.search(pattern, text, flags=re.DOTALL)
    if match:
        return match.group(0)
    else:
        return text


def split_text_into_chunks(text, chunk_size):
    """
    Splits the given text into chunks of specified size in characters.

    Args:
        text (str): The text to be split into chunks.
        chunk_size (int): The desired size of each chunk in characters.

    Returns:
        list: A list of text chunks.
    """
    return [text[i:i + chunk_size] for i in range(0, len(text), chunk_size)]


# def format_summary(summary):
#     # Add paragraph breaks
#     formatted_summary = re.sub(r'(?<!\n)\n(?!\n)', '\n\n', summary)
    
#     # Wrap the text into paragraphs
#     # paragraphs = formatted_summary.split('\n\n')
#     # formatted_paragraphs = [textwrap.fill(p, width=80) for p in paragraphs]
    
#     return '\n\n'.join(formatted_paragraphs)


def split_into_paragraphs(text, sentences_per_paragraph=5):
    """
    Splits the given text into paragraphs, with a specified number of sentences per paragraph.

    Args:
        text (str): The input text to be split into paragraphs.
        sentences_per_paragraph (int, optional): The number of sentences per paragraph. Defaults to 5.

    Returns:
        str: The text split into paragraphs, separated by two newline characters.

    Example:
        >>> text = "This is a sample text. It has multiple sentences. Each sentence is separated by a period."
        >>> split_into_paragraphs(text, sentences_per_paragraph=2)
        'This is a sample text. It has multiple sentences.\\n\\nEach sentence is separated by a period.'
    """
    # Split the text into individual sentences
    sentences = re.findall(r'[^.!?]+[.!?]', text)
    
    paragraphs = []
    current_paragraph = []
    
    for sentence in sentences:
        current_paragraph.append(sentence.strip())
        
        if len(current_paragraph) == sentences_per_paragraph:
            paragraphs.append(' '.join(current_paragraph))
            current_paragraph = []
    
    # Add any remaining sentences as the last paragraph
    if current_paragraph:
        paragraphs.append(' '.join(current_paragraph))
    
    return '\n\n'.join(paragraphs)
