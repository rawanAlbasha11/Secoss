from pathlib import Path

objs = []
objs.append(b"1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n")
objs.append(b"2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n")
objs.append(
    b"3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj\n"
)
stream = (
    b"BT\n"
    b"/F1 24 Tf\n"
    b"100 700 Td\n"
    b"(\xd9\x85\xd8\xad\xd8\xa7\xd8\xb6\xd8\xb1\xd8\xa9 PDF \xd8\xaa\xd8\xac\xd8\xb1\xd9\x8a\xd8\xa8\xd9\x8a\xd8\xa9) Tj\n"
    b"ET\n"
)
contents = b"4 0 obj\n<< /Length %d >>\nstream\n%sendstream\nendobj\n" % (len(stream), stream)
objs.append(contents)
objs.append(b"5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n")

body = b"".join(objs)
xref = b"xref\n0 6\n0000000000 65535 f \n"
offset = 9
for obj in objs:
    xref += f"{offset:010d} 00000 n \n".encode()
    offset += len(obj)

trailer = (
    b"trailer\n<< /Root 1 0 R /Size 6 >>\nstartxref\n"
    + str(offset).encode()
    + b"\n%%EOF\n"
)
pdf = b"%PDF-1.4\n" + body + xref + trailer
Path("public/lecture-content.pdf").write_bytes(pdf)
print('PDF generated:', Path('public/lecture-content.pdf').resolve())
