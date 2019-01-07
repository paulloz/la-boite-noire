BASEURL="http://lepanierasalade.fr/index/"
BASEDIR="public/"

UPDATE=""

for FILE in "data.json" "data.tsv"
do
    if [ $(md5sum "${BASEDIR}${FILE}" | cut -f1 -d' ') != $(wget -q "${BASEURL}${FILE}" -O- | md5sum | cut -f1 -d' ') ]; then
        UPDATE="${UPDATE}$(if [ ${#UPDATE} -gt 0 ]; then echo " "; else echo ""; fi)${FILE}"
        wget -q "${BASEURL}${FILE}" -P ${BASEDIR}
        mv "${BASEDIR}${FILE}.1" "${BASEDIR}${FILE}"
    fi;
done

if [ ${#UPDATE} -gt 0 ]; then
    git fetch origin && git rebase origin/master
    for FILE in $UPDATE
    do
        git add "${BASEDIR}${FILE}"
    done
    git commit -m "Update ${UPDATE}"
    git push origin master:master
fi;
