/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  #isDirect = true;

  #allowedRegex = /[A-Z]/g;
  #alphabetSize = 26;
  #aCharCode = 'A'.charCodeAt(0);

  /**
   * @param {boolean} isDirect
   */
  constructor(isDirect = true) {
    this.#isDirect = isDirect;
  }

  /**
   * @param {string|undefined} message
   * @param {string|undefined} key
   * @returns {string}
   */
  encrypt(message, key) {
    this.#validateParams(message, key);

    const result = this.#replacer(
      message.toUpperCase(),
      key.toUpperCase(),
      (
        msgCharCode,
        keyCharCode
      ) => (
        msgCharCode + keyCharCode
      ) % this.#alphabetSize
    )

    return result.join('');
  }

  /**
   * @param {string|undefined} encryptedMessage
   * @param {string|undefined} key
   * @returns {string}
   */
  decrypt(encryptedMessage, key) {
    this.#validateParams(encryptedMessage, key);

    const result = this.#replacer(
      encryptedMessage.toUpperCase(),
      key.toUpperCase(),
      (
        msgCharCode,
        keyCharCode
      ) => (
        msgCharCode - keyCharCode + this.#alphabetSize
      ) % this.#alphabetSize
    )

    return result.join('');
  }

  /**
   * @param {string|undefined} msg
   * @param {string|undefined} key
   * @throws {Error}
   */
  #validateParams(msg, key) {
    const isValidMsg = typeof msg === 'string' &&
      msg?.length > 0

    const isValidKey = typeof key === 'string' &&
      key?.length > 0;

    if (!isValidMsg || !isValidKey) {
      throw new Error('Incorrect arguments!')
    }
  }

  /**
   * @param {string} msg
   * @param {string} key
   * @param {(
   *   msgCharCode: number,
   *   keyCharCode: number
   * ) => number} formula
   * @returns {string[]}
   */
  #replacer(msg, key, formula) {
    const result = [];

    const fullKey = this.#getFullKey(msg, key);

    for (let i = 0; i < msg.length; i++) {
      const isAllowed = this.#isAllowedSymbol(msg[i]);

      if (!isAllowed) {
        result.push(msg[i]);

        continue;
      }

      const msgCharCode = msg[i].charCodeAt(0) - this.#aCharCode;
      const keyCharCode = fullKey[i].charCodeAt(0) - this.#aCharCode;

      const finalCharCode = formula(msgCharCode, keyCharCode);

      result.push(
        String.fromCharCode(finalCharCode + this.#aCharCode)
      );
    }

    if (!this.#isDirect) {
      result.reverse();
    }

    return result;
  }

  /**
   * @param {string} msg
   * @param {string} key
   * @returns {string[]}
   */
  #getFullKey(msg, key) {
    const allowedMatches = msg.matchAll(this.#allowedRegex);

    const fullKey = msg.split('');

    let keyIndex = 0;

    for (const { index: msgIndex } of allowedMatches) {
      fullKey[msgIndex] = key[keyIndex];

      if (keyIndex === key.length - 1) {
        keyIndex = 0;
      } else {
        keyIndex += 1;
      }
    }

    return fullKey;
  }

  /**
   * @param {string} msg
   * @returns {boolean}
   */
  #isAllowedSymbol(msg) {
    return msg.match(this.#allowedRegex) !== null
  }
}

module.exports = {
  VigenereCipheringMachine
};
