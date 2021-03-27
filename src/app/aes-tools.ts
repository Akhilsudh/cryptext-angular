import { pkcs5, cipher, util } from 'node-forge';

export class AesTools {
  private salt: String = '9bx03e6e4ftowc6a44gkgx5hiv71mgb6';
  private iv: String = '9vfko0kqr4ihi5c7';
  private key: pkcs5;
  private passPhrase: String;

  constructor(passPhrase: String) {
    this.passPhrase = passPhrase;
    this.key = pkcs5.pbkdf2(passPhrase, this.salt, 1000, 32);
  }

  aes_encrypt(text: String): String {
    const c = cipher.createCipher('AES-CBC', this.key);
    c.start({ iv: this.iv });
    c.update(util.createBuffer(text, 'utf8'));
    c.finish();
    return util.encode64(c.output.getBytes());
  }

  aes_decrypt(text: String): string {
    const d = cipher.createDecipher('AES-CBC', this.key);
    d.start({ iv: this.iv });
    d.update(new util.ByteStringBuffer(util.decode64(text)));
    d.finish();
    return d.output.toString();
  }
}
