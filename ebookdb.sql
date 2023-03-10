PGDMP     "                    {            ebookdb    14.1    14.1                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    17225    ebookdb    DATABASE     c   CREATE DATABASE ebookdb WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_India.1252';
    DROP DATABASE ebookdb;
                postgres    false            ?            1259    17335    author    TABLE     n   CREATE TABLE public.author (
    id integer NOT NULL,
    name character varying(255),
    book_id integer
);
    DROP TABLE public.author;
       public         heap    postgres    false            ?            1259    17484    book    TABLE     Z  CREATE TABLE public.book (
    id integer NOT NULL,
    author_name character varying(255),
    book_category integer,
    book_language character varying(255),
    book_link character varying(255),
    coverimg character varying(255),
    name character varying(255),
    price double precision NOT NULL,
    publishing_year integer NOT NULL
);
    DROP TABLE public.book;
       public         heap    postgres    false            ?            1259    17241    hibernate_sequence    SEQUENCE     {   CREATE SEQUENCE public.hibernate_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.hibernate_sequence;
       public          postgres    false            ?            1259    17347 	   publisher    TABLE     q   CREATE TABLE public.publisher (
    id integer NOT NULL,
    name character varying(255),
    book_id integer
);
    DROP TABLE public.publisher;
       public         heap    postgres    false            ?            1259    17445    reader    TABLE     Y   CREATE TABLE public.reader (
    id integer NOT NULL,
    name character varying(255)
);
    DROP TABLE public.reader;
       public         heap    postgres    false            ?            1259    17506    reader_book    TABLE     ?   CREATE TABLE public.reader_book (
    id integer NOT NULL,
    assigned_date date,
    borrowing_days integer NOT NULL,
    last_date date,
    book_id integer,
    reader_id integer
);
    DROP TABLE public.reader_book;
       public         heap    postgres    false            ?            1259    17450    users    TABLE     ?   CREATE TABLE public.users (
    id integer NOT NULL,
    email_id character varying(255),
    password character varying(255),
    user_name character varying(255),
    userrole character varying(255)
);
    DROP TABLE public.users;
       public         heap    postgres    false                      0    17335    author 
   TABLE DATA           3   COPY public.author (id, name, book_id) FROM stdin;
    public          postgres    false    210   U                 0    17484    book 
   TABLE DATA           ?   COPY public.book (id, author_name, book_category, book_language, book_link, coverimg, name, price, publishing_year) FROM stdin;
    public          postgres    false    214   ?                 0    17347 	   publisher 
   TABLE DATA           6   COPY public.publisher (id, name, book_id) FROM stdin;
    public          postgres    false    211   `#                 0    17445    reader 
   TABLE DATA           *   COPY public.reader (id, name) FROM stdin;
    public          postgres    false    212   ?#                 0    17506    reader_book 
   TABLE DATA           g   COPY public.reader_book (id, assigned_date, borrowing_days, last_date, book_id, reader_id) FROM stdin;
    public          postgres    false    215   |$                 0    17450    users 
   TABLE DATA           L   COPY public.users (id, email_id, password, user_name, userrole) FROM stdin;
    public          postgres    false    213   ?$                  0    0    hibernate_sequence    SEQUENCE SET     B   SELECT pg_catalog.setval('public.hibernate_sequence', 117, true);
          public          postgres    false    209            q           2606    17339    author author_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.author
    ADD CONSTRAINT author_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.author DROP CONSTRAINT author_pkey;
       public            postgres    false    210            y           2606    17490    book book_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.book
    ADD CONSTRAINT book_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.book DROP CONSTRAINT book_pkey;
       public            postgres    false    214            s           2606    17351    publisher publisher_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.publisher
    ADD CONSTRAINT publisher_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.publisher DROP CONSTRAINT publisher_pkey;
       public            postgres    false    211            {           2606    17510    reader_book reader_book_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.reader_book
    ADD CONSTRAINT reader_book_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.reader_book DROP CONSTRAINT reader_book_pkey;
       public            postgres    false    215            u           2606    17449    reader reader_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.reader
    ADD CONSTRAINT reader_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.reader DROP CONSTRAINT reader_pkey;
       public            postgres    false    212            w           2606    17456    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    213                       2606    17516 '   reader_book fk4to1i4ajox0rqwvdpawbbktdb    FK CONSTRAINT     ?   ALTER TABLE ONLY public.reader_book
    ADD CONSTRAINT fk4to1i4ajox0rqwvdpawbbktdb FOREIGN KEY (reader_id) REFERENCES public.reader(id);
 Q   ALTER TABLE ONLY public.reader_book DROP CONSTRAINT fk4to1i4ajox0rqwvdpawbbktdb;
       public          postgres    false    3189    212    215            }           2606    17496 %   publisher fknl0jbqw2v1vtnikc5u2uxrmmu    FK CONSTRAINT     ?   ALTER TABLE ONLY public.publisher
    ADD CONSTRAINT fknl0jbqw2v1vtnikc5u2uxrmmu FOREIGN KEY (book_id) REFERENCES public.book(id);
 O   ALTER TABLE ONLY public.publisher DROP CONSTRAINT fknl0jbqw2v1vtnikc5u2uxrmmu;
       public          postgres    false    3193    214    211            |           2606    17491 "   author fkqi5nll4mal57ohohlv5g0qlv2    FK CONSTRAINT     ?   ALTER TABLE ONLY public.author
    ADD CONSTRAINT fkqi5nll4mal57ohohlv5g0qlv2 FOREIGN KEY (book_id) REFERENCES public.book(id);
 L   ALTER TABLE ONLY public.author DROP CONSTRAINT fkqi5nll4mal57ohohlv5g0qlv2;
       public          postgres    false    3193    214    210            ~           2606    17511 '   reader_book fksya0vgp7jo3nfabrgmigd66j0    FK CONSTRAINT     ?   ALTER TABLE ONLY public.reader_book
    ADD CONSTRAINT fksya0vgp7jo3nfabrgmigd66j0 FOREIGN KEY (book_id) REFERENCES public.book(id);
 Q   ALTER TABLE ONLY public.reader_book DROP CONSTRAINT fksya0vgp7jo3nfabrgmigd66j0;
       public          postgres    false    214    215    3193               ?   x??K
?0 ???)??u?ĵE?ٺ?І?????x?????&??BE?I?4??;?K1?V?
?E>??d???V??C?J?"??????t???6??NlҜ)???}??1?M???W?????&?         k  x???_o?8ş?O᧾DKb'??Jh
?3m???Ti?Rd??x	v??̧_;$t?#?> ????{?o|?S"Z?p^?uA?6???`U??.??-k??2!??R1`?Z
??,?b5?z?R????M?'???X𪦲?"/??(???????bD?U?,w#t?z??)^L͙?3{??MG/R?:;*F??lϱ?ha(^????a?m?6̨????]%8?/???i???9??$&<a<?eS?K?9?r?^ǘ?17;椵`???pP?tTdv?%b?p0?:WW??%?uu???&yK??p+?q3???????]??Bܘ?ʓ????&k'7?XܡR#p?=?J'dG???{?:??ϒ[?,D?F-_????W??1???[jǰ??d?!?C???X?Yز??B???F???gV?l??-u??G?=R?ʜJRX?{???????乶硣??r?v???F?V???.=?rjU????.k?i!;F? !'pЊ???D??>???Q?_??T????_*f?w-I?~?GOg??=??Ι??7??4g7v}??;?|?Ps ??r?]0!?7ju?[d?g{"JZ?tm??h<y7?ò???U4?#? ZI???"?	[?]?n.??9٭o???(?f????:?????!_=?nߖ?9??F`?X?0&?Yo???s1?d??%??w???_?Um?է???z~??gC? 
?y???o??VR??Z??_Y<}??fS??0?=?S3?Ox?!?.??? ? ?????s^??-?g!?Ue9???&?L ?C/<???rx(?6U	q?)$oT𫾣_6??*?,????????]5?.????<????a?"???         ?   x?̽?  ???)??J+8kRMH??r?Ӓ?h???ݾ?S
?T?)W???Pi??v[?S???3????ïk???0?k????G}KI<?E¡?m?(??l??h?sr?C3?-o??3???m???ǷD??L	,?         q   x?Ǳ
?0???)?bkE:?%?X??.Qk???5??f????O?o???孕????h????7-?CG?X??
?E???U???H>??)-??:?7?W?.?j?????0?#B         W   x?U??? Dѳ??x?^?1H	p?i??H?V?EA?-+R?????D?"?p?4q?|?L?|O??\1̝FSW+(?4???/!??           x?m?Mo?@??˯ )gdQn?H?@?Zۤ?زp??U????y'?̘`????X1D?^??x??v??Zr?՛????b???????b??RwX??rS1??A? ??????R}L???rB?]\3??i?iQ??K?.???h????ᆄ?js??ق??+?
&??_?ԄT??oa*?q/??#?e????W/~R|?p?oK?"?7_{? ^?:??({g?`?Dd?.~??q??V;/}늢?̿s     